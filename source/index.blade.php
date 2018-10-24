{{--*/ $activeNav = 'home' /*--}}

@extends('_layouts.master')

@section('title', '')

@section('styles')
@endsection

@section('content')
  @include('_partials.hero')
  @include('_partials.portfolio')
  @include('_partials.capabilities')

  {{--<section class="o-section  o-section__approach  theme-primary">
    <div class="o-section__wrapper  o-wrapper">

      <div class="o-layout">
        <div class="o-layout__item  u-1/1  u-1/2@tablet  u-push-1/3@tablet">
          <h4>Through my balanced approach, I seek to marry form with function in order to deliver notable experiences across digital and analog channels.</h4>
          <p class="u-margin-bottom-none">I tend to find simple solutions for complex problems and place a strong emphasis on craft in every detail along the way.</p>
        </div>
      </div>

    </div>
  </section>

  <section class="o-section  o-section__agile  theme-primary">
    <div class="o-section__wrapper  o-wrapper">

      <div class="o-layout">
        <div class="o-layout__item  u-1/1  u-1/2@tablet  u-1/3@desktop  u-push-5/10@desktop">
          <h5>I can work closely with designers and backend engineers as a sole frontend or on Agile teams.</h5>
        </div>
      </div>

    </div>
  </section>

  <section class="o-section  o-section__agile  theme-primary">
    <div class="o-section__wrapper  o-wrapper">

      <div class="o-layout">
        <div class="o-layout__item  u-1/1  u-1/2@tablet  u-1/3@desktop">
          <p>Portfolio coming soon. In the meantime, check out this <a href="https://www.dropbox.com/sh/wwtr2aaxevicqep/AAAaGRoJ8U_eRJIHrt07ZFuwa?dl=0" class="t-link" target="_blank">dropbox</a> folder.</p>
        </div>
      </div>

    </div>
  </section>--}}

  {{--@include('_partials.portfolio')--}}
@endsection

@section('scripts')
@endsection
