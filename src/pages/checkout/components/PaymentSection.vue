<template>

    <div class="flex flex-col gap-4 w-full">
        <div @click="togglePaymentOption('ALI')" :class="{'border border-purple-500': selectedPayment === 'ALI'}" class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3 hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                    <p class="text-sm"> Global Ali pay</p>
                    <img src="../../../assets/Icon/alipay.svg" class="h-14 w-auto"/>
                </div>    
                <span class="flex items-center">
                    <ChevronDownIcon v-if="selectedPayment === 'ALI'" class="h-4 w-4"/>
                    <ChevronRightIcon v-else class="h-4 w-4"/>    
                </span> 
            </div>
            <PaymentInstruction v-if="selectedPayment === 'ALI'">
                <ButtonPrimary :is-loading="selectedPayment === 'ALI' && initiatePaymentLoading" @click.prevent ="initiatePayment('ALI')" :classes="' sm:px-2'"> <span class="text-xs"> Continue to Ali pay</span> </ButtonPrimary>
            </PaymentInstruction>
        </div>
        
        <div @click="togglePaymentOption('PAYPAL')" :class="{'border border-purple-500': selectedPayment === 'PAYPAL'}" class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3  hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                <p class="text-sm"> Paypal</p>
                <img src="../../../assets/Icon/paypal.svg" class="h-14 w-auto"/>
                
            </div>    
            <span class="flex items-center">
                <ChevronDownIcon v-if="selectedPayment === 'PAYPAL'" class="h-4 w-4"/>
                <ChevronRightIcon v-else class="h-4 w-4"/>   
            </span>
            </div>
            
            <PaymentInstruction v-if="selectedPayment === 'PAYPAL'">
                <ButtonPrimary :is-loading="selectedPayment === 'PAYPAL' && initiatePaymentLoading" @click.prevent ="payPalPayment"  :classes="' sm:px-2'"> <span class="text-xs"> Continue to paypal</span> </ButtonPrimary>
            </PaymentInstruction>

            <div id="paypal-button-container"></div>
        </div>

        <div @click="togglePaymentOption('STRIPE')" :class="{'border border-purple-500': selectedPayment === 'STRIPE'}" class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3 hover:border hover:border-purple-500">
            <div class="flex items-center justify-between" :class="{'mb-6': selectedPayment === 'STRIPE'}">
                <div class="flex gap-2 items-center">
                <p class="text-sm"> Stripe</p>
                <img src="../../../assets/Icon/stripe.svg" class="h-14 w-auto"/>
            </div>    
            <span class="flex items-center">
                <ChevronDownIcon v-if="selectedPayment === 'STRIPE'" class="h-4 w-4"/>
                <ChevronRightIcon v-else class="h-4 w-4"/> 
            </span>  
            </div>
            <template :class="{'hidden': selectedPayment !== 'STRIPE', 'flex flex-col gap-4': selectedPayment === 'STRIPE'}">
                <div id="payment-form">
                    <div id="card-element"></div>
                    <ButtonPrimary :classes="'w-[200px] sm:px-2 mt-6'" :is-loading="selectedPayment === 'STRIPE' && initiatePaymentLoading" @click.prevent ="handleStripePayment()" > <span class="text-xs">  Pay now </span> </ButtonPrimary>
                </div>
                <PaymentInstruction :is-full="true"/>
            </template>
        </div>
        <div @click="togglePaymentOption('CRYPTOMUS')" :class="{'border border-purple-500': selectedPayment === 'CRYPTOMUS'}"  class="flex flex-col cursor-pointer bg-white-500 rounded-xl border border-gray-500 px-6 py-3 hover:border hover:border-purple-500">
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                <p class="text-sm"> Cryptocurrency (USTD)</p>
                <img src="../../../assets/Icon/cryptomus.svg" class="h-14 w-24"/>
                
            </div>    
            <span class="flex items-center">
                <ChevronDownIcon v-if="selectedPayment === 'CRYPTOMUS'" class="h-4 w-4"/>
                <ChevronRightIcon v-else class="h-4 w-4"/> 
            </span> 
            </div>
            
            <PaymentInstruction v-if="selectedPayment === 'CRYPTOMUS'">
                <ButtonPrimary :classes="' sm:px-2'"> <span class="text-xs"> Continue to cryptomus</span> </ButtonPrimary>
            </PaymentInstruction>
        </div>
    </div>

 </template>
 <script setup>
   import { ref,onMounted } from 'vue'
   import {  ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
   import PaymentInstruction from '../components/PaymentInstruction.vue';
   import ButtonPrimary from '@/molecules/ButtonPrimary.vue';

   import { AMSCashierPayment } from '@alipay/ams-checkout';
   import { useAPI } from '@/composables/useAPI';
   import { useConfig } from '@/composables/useConfig';
   import { useAuth } from '@/composables/useAuth'; 
   import { useToast } from '@/composables/useToast.js'
   import { loadStripe } from '@stripe/stripe-js';
   import { loadScript } from '@paypal/paypal-js';

   import { useRouterStore } from '@/stores/router.state'
   import { computed } from 'vue';

   const { aliPayRequestPaymentSessionData, stripeRequestClientSecret, paypalCreateOrder} = useAPI();
   const { paymentRedirectUrl,alipayPaymentNotifyUrl, generateUUID, paymentEnvornment, stripePK, paypalPK} = useConfig();

   const stripePromise = loadStripe(stripePK);
   const stripe = ref(null);
   const elements = ref(null);
   const cardElement = ref(null);
   const initiatePaymentLoading = ref(false);
   const referenceOrderId = generateUUID();
   const paymentRequestId = generateUUID();
   const { user } = useAuth();
   const { showErrorMsg } = useToast();
   const user_  = JSON.parse(user.value);
   const state = useRouterStore();
   const cart = computed(() => {
        return state.getCart;
   });

   const selectedPayment = ref('');

   function togglePaymentOption(name) {
    if (name === selectedPayment.value) {
        selectedPayment.value = ''; 
    } else {
        selectedPayment.value = name;
    }
   }
   
   async function initiatePayment(type) {
    togglePaymentOption(type);
    switch(type) {
        case 'ALI':
            aliPayRequestPaymentSession()
            break;
        case 'STRIPE':
            break;
        default:
            break
    }
   }

   async function aliPayRequestPaymentSession() {
        
        const request = {
                            productCode: "CASHIER_PAYMENT",
                            paymentRequestId: paymentRequestId,
                            order: {
                                referenceOrderId: referenceOrderId,
                                orderDescription: "xxxxx",
                                orderAmount: {
                                    currency: "USD",
                                    value: cart.value.price
                                },
                                buyer: {
                                    referenceBuyerId: user_.email
                                }
                            },
                            paymentAmount: {
                                currency: "USD",
                                value: cart.value.price
                            },
                            paymentMethod: {
                                paymentMethodType: "CARD",
                                paymentMethodMetaData: {
                                    paymentMethodRegion: "BR"
                                }
                            },
                            paymentRedirectUrl: paymentRedirectUrl + 'package_id=' + cart.value.id + '&user_type=' + cart.value.user_type || 'Individual',
                            paymentNotifyUrl: alipayPaymentNotifyUrl,
                            paymentFactor: {
                                isAuthorization: true
                            },
                            settlementStrategy: {
                                settlementCurrency: "USD"
                            }
        }
        
        initiatePaymentLoading.value = true;

        const checkoutApp = new AMSCashierPayment({
            environment: paymentEnvornment,
            locale: 'en_US',
            onEventCallback: (el) => { console.log('-----onEventCallback-----', el)}
        });

        const results = await aliPayRequestPaymentSessionData(request);

        initiatePaymentLoading.value = false;

        if (results?.statusCode === 200) {
            await checkoutApp.createComponent({
                sessionData: results.data.paymentSessionData
            });
        }  else {
            showErrorMsg(results.message)
        }             
   }

   async function handleStripePayment() {
     const request = {
        amount: cart.value.price,
        currency: 'USD', 
        package_id: cart.value.id
     }

     const res = await stripeRequestClientSecret(request);
        initiatePaymentLoading.value = true;
        if (res.statusCode === 200) {
            const clientSecret = res.data.client_secret

            const result = await stripe.value.confirmCardPayment(clientSecret, 
               {
                payment_method: {
                    card: cardElement.value,
                }
            });
            initiatePaymentLoading.value = false;

            if (result.error) {
                showErrorMsg(result.error.message)
            } else {
                location.href = paymentRedirectUrl + 'package_id=' + cart.value.id + '&user_type=' + cart.value.user_type || 'Individual'
            }
        }   else {
            showErrorMsg(res.message);
        } 
    }
   
 

    async function payPalPayment() {

        const request = {
            amount: cart.value.price,
            currency: 'USD', 
            package_id: cart.value.id
        }

        await loadScript({
            'client-id': paypalPK,
            currency: request.currency
        });

        const response = await paypalCreateOrder(request);

        window.paypal.Buttons({
            createOrder: () =>{
              return response.data.jsonResponse.id;
            },
            onApprove: (data, actions) => {
                console.log(data, actions);
                location.href = paymentRedirectUrl + 'package_id=' + cart.value.id + '&user_type=' + cart.value.user_type || 'Individual'

            },
            onError: (error) => {
                showErrorMsg('Error creating PayPal order:', error);
            }
        }).render('#paypal-button-container');
    }

    
    onMounted(async () => {
        const appearance = {
                theme: 'stripe',
                variables: {
                    colorPrimary: '#6d49ff',
                    colorBackground: '#ffffff',
                    colorText: '#30313d',
                    colorDanger: '#df1b41',
                    spacingUnit: '2px',
                    borderRadius: '4px'
                }
        }
        stripe.value = await stripePromise;
        elements.value = stripe.value.elements({appearance});
        cardElement.value = elements.value.create('card'); 
        cardElement.value.mount('#card-element');
    });

 </script>