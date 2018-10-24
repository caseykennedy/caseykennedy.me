<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="UTF-8">
    <meta name="author" content="Casey Kennedy">
    <meta name="description" content="Casey Kennedy is a visual designer and front-end web developer located in Reno, Nv">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <link rel='shortlink' href='https://caseykennedy.me' />

    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/scratch.css">
    @yield('styles')

    <link href="assets/favicon.ico" rel="shortcut icon">
    <title>I'm Casey Kennedy — Front-end fanatic, UI &amp; UX technician, Swiss Design enthusiast @yield('title', '')</title>

    <script src="/assets/js/vendor/modernizr-2.8.3.min.js"></script>
  </head>
  <body id="body">
    <div id="preloader">
      <div id="status">&nbsp;</div>
    </div>
    @include('_partials.overlay')
    @include('_partials.header')
    <main class="c-main" id="main">
      @yield('content')
    </main>
    @include('_partials.footer')
    @include('_partials.scripts')
  </body>
</html>
