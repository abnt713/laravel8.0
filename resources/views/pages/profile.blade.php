@extends('layouts.app')

@section('page_title', ' - Profile')

@section('content')
    <h1 class="mt-5">Profile</h1>

    <form>
        <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name <span class="text-danger">*</span></label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="name" name="name" value="Lorem">
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">E-mail</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" disabled id="email" value="email@example.com">
            </div>
        </div>
        <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            </div>
        </div>

        <div class="form-group row">
            <label for="password_confirmation" class="col-sm-2 col-form-label">Confirm Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Password">
            </div>
        </div>

        <div class="form-group row">
            <button type="submit" class="btn btn-primary">Update</button>
        </div>
    </form>
@endsection
