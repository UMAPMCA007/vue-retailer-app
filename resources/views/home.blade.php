@extends('layouts.app')
@section('content')
<div class="container">
    <div class="pt-10" id="app">
        <main-component>    
        </main-component>
        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="list()"></pagination>
    </div>
    
</div>
@endsection
