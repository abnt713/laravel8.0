@extends('layouts.app')

@section('page_title', ' - Home')

@section('content')
    <h1 class="mt-5 d-flex justify-content-between align-items-center">
        To Do
        <a href="" class="btn btn-primary">Add</a>
    </h1>

    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <del>Item 1</del>
            <div>
                <a href="" class="badge badge-danger">Remove</a>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Item 2
            <div>
                <a href="asd" class="badge badge-success">Done</a>
                <a href="" class="badge badge-danger">Remove</a>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Item 3
            <div>
                <a href="asd" class="badge badge-success">Done</a>
                <a href="" class="badge badge-danger">Remove</a>
            </div>
        </li>
    </ul>
@endsection
