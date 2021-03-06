<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Peddana&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">

    <title>Restaurant Model</title>
    <style>
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100wh;
        height: 100vh;
    }
    </style>
</head>

<body>
    <div id="app">
        <main-component></main-component>
    </div>
</body>
<script src="{{ asset('js/app.js') }}"></script>

</html>