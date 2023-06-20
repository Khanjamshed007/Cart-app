import { createReducer } from '@reduxjs/toolkit';


export const cartReducer = createReducer({

    CartItems: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
},
    {
        addtoCart: (state, action) => {
            const item = action.payload;
            const isItemExist = state.CartItems.find((i) => i.id === item.id);

            if (isItemExist) {
                state.CartItems.forEach(i => {
                    if (i.id === item.id) i.quantity += 1;
                })
            } else {
                state.CartItems.push(item);
            }
        },

        decrement: (state, action) => {
            const item = state.CartItems.find((i) => i.id === action.payload);

            if (item.quantity > 1) {
                state.CartItems.forEach((i) => {
                    if (i.id === item.id) i.quantity -= 1;
                });
            }
        },
        delete: (state, action) => {
            state.CartItems = state.CartItems.filter((i) => i.id !== action.payload)
        },

        calculatePrice: (state) => {
            let sum = 0;
            state.CartItems.forEach((i) => (
                sum += i.price * i.quantity
            ))
            state.subtotal = sum;
            state.shipping = state.subtotal > 1000 ? 0 : 200;
            state.tax = +(state.subtotal * 0.18).toFixed();
            state.total = state.subtotal + state.shipping + state.tax;
        }


    })