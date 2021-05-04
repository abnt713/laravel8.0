<?php

namespace App\Http\Controllers;

class RegisterController extends Controller
{
    public function showForm()
    {
        return view('pages.register');
    }
    
}