@extends('layouts.app')

@section('page_title', ' - Login')

@section('content')
    <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <label for="email" class="sr-only">Email address</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" required autofocus>
        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
        <div class="checkbox">
            <label>
                <input type="checkbox" name="remember_me"> Remember me
            </label>
        </div>
        <a href="">Register</a>
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Login</button>
    </form>
@endsection
