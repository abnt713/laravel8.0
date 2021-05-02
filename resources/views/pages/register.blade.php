@extends('layouts.app')

@section('page_title', ' - Register')

@section('content')
    <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <label for="name" class="sr-only">Name</label>
        <input type="text" id="name" name="name" class="form-control" placeholder="Name" required autofocus>
        <label for="email" class="sr-only">Email address</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" required>
        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
        <label for="password_confirmation" class="sr-only">Password Confirmation</label>
        <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" placeholder="Password Confirmation" required>
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Register</button>
    </form>
@endsection
