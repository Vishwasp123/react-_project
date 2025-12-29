//--------------- Imports dependiences--------------
import {render, screen , fireEvent, waitFor } from '@testing-library/react'
import Login from '../../pages/Login'; 
import { login } from '../../services/auth_api'; 
import { BrowserRouter } from 'react-router-dom';
import { error } from 'console';


// ------------------Api Mock (SERVICE MOCK)---------------
jest.mock('../../services/auth_api.js', () => ({
    login: jest.fn()
}));


//------------------NAVIGATION MOCK ---------------

const mockNavigate  = jest.fn(); 

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useNavigate: () => mockNavigate
}));

//-------------------TESTS-------------

describe('Login Page Tests', () => {

    const renderLogin = () => {
        render(
            <BrowserRouter>
            <Login />
            </BrowserRouter>
        )
    }

    //---check Ui render test ----
    test('Check UI is render suceefully', () => {
        renderLogin(); 
        expect(screen.getByText(/Log In to Qpay/i)).toBeInTheDocument();

        expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
        
        expect(screen.getByPlaceholderText('******'))
        expect(screen.getByRole('button', {name: /PROCEED/i })).toBeInTheDocument();
    });

    //---------Input typing test-----
    test('email and password type are working ', () => {
        renderLogin();

        fireEvent.change(screen.getByPlaceholderText(/Email Address/i),{
            target:  {value: 'test@example.com'}
        });

        fireEvent.change(screen.getByPlaceholderText('******'), {
            target: {value: 'password'}
        }); 

        expect(screen.getByPlaceholderText(/email address/i).value).toBe('test@example.com')
    });

    //-------Sucessfully login test Important

    test('sucessfull login', async() => {
        login.mockResolvedValueOnce({}); 

        renderLogin(); 

        fireEvent.change(screen.getByPlaceholderText(/email address/i), {
            target: {value: 'test@example.com'}
        }); 

        fireEvent.change(screen.getByPlaceholderText('******'), {
            target: {value: 'password123'}
        }); 

        fireEvent.click(screen.getByRole('button', {name: /proceed/i })); 

        await waitFor(() =>{
            expect(login).toHaveBeenCalledWith({
                email: 'test@example.com', 
                password: 'password123'
            });

            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    })


    //-----Error handling test 

    test("Api errors handling", async() =>{

        login.mockRejectedValueOnce({
            response: {
            data: { error: "Invalid credentials" }
            }
        });


        renderLogin(); 

        fireEvent.click(screen.getByRole('button', {name: /proceed/i })); 

        const errorMessage = await screen.findByText(/invalid credentials/i);

        expect(errorMessage).toBeInTheDocument
        
    
    })



});



