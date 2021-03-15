import React from 'react'

const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state
    }
};

export default isLoggedReducer;
