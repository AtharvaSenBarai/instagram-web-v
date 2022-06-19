import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => (

<div>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://mini-chess-database.netlify.app/assets/css/style.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

     <!-- Custom styles -->
    <link rel="stylesheet" href="https://mini-chess.netlify.app/css/main.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,300,600" rel="stylesheet">

    <!-- Ionic icons -->
    <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet">

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.png" />

    <title>Mini Chess | Home</title>
</head>

<body>

    <section id="intro" class="bg-light">
        <div class="container">
            <div class="heading-block">
                <h1>Mini Chess</h1>
                <p>Get Registered your team to our site and add your special tournament and shown in site.</p>
                <div class="topmargin-lg">
                    <a href="features" class="primary-btn"><i class="icon ion-md-play-circle"></i> View Features</a>
                    <a href="#" class="secondary-btn"><i class="icon ion-md-appstore"></i> Register now</a>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-dark">
        <div class="container">
            <div class="heading-block">
                <h3 class="text-light">Get Registered Your Team To Our Site</h3>
                <p class="text-light">Add Your Tournament And Team/Club Details and get shown.</p>
            </div>
            <div class="text-center topmargin-lg">
                <img src="assets/images/iphone.png" class="img-fluid mobile-app" alt="iphone image by Zee Swift">
            </div>
            <div class="heading-block">
                <h3 class="text-light topmargin-sm">Get Started Now</h3>
                <div class="topmargin-sm">
                    <a href="teams" class="primary-btn"><i class="icon ion-md-create"></i> Register Your Team</a>
                    <a href="#" class="primary-btn"><i class="icon ion-md-add"></i> Add Tournament</a>
                </div>
                <small class="topmargin-sm text-light">Website/Amazon Firetv</small>
            </div>
        </div>
    </section>

    <section class="bg-light">
        <div class="container">
            <div class="heading-block">
                <h3>Mini Chess </h3>
                <p>Our Teams/Club are active on LiChess.Org And Chess.Com And Our Chess Bot Are Active on LiChess.Org
                    </p>
            </div>
            <div class="row topmargin-lg">
                <div class="col-lg-4 col-md-6 offset-lg-2">
                    <div class="pricing-box">
                        <h4>Chess Bot</h4>
                        <span>Only Available on LiChess.Org</span>
                        <p class="text-muted">Chess Bot Details</p>
                        <ul class="topmargin-sm">
                            <li>Name- Learn_Your_Skill</li>
                            <li>Name- L_Y_S_Entries</li>
                            <li>Avilable only 12 Hours</li>
                            <li>Accept only Standard challenges (Blitz, Bullet and Rapid)</li>
                            <li>Only Available on LiChess.Org</li>
                            <li class="not-included">CrazyHouse, Chess960, King Of The Hill, Three-check, AntiChess, Automic, Horde, Racing King</li>
                            <li class="not-included">Avilable 24/7</li>
                            <li class="not-included">Personal Chatting</li>
                        </ul>
                        <a href="https://lichess.org/@/Learn_Your_Skill" class="primary-btn topmargin-sm">Learn_Your_Skill</a>
                        <a href="https://lichess.org/@/L_Y_S_Entries" class="secondary-btn topmargin-sm">L_Y_S_Entries</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="pricing-box">
                        <h4>Chess Team</h4>
                        <span>Our Chess Teams Avilable On Chess.Com And On LiChess.Org</span>
                        <p class="text-muted">Free Entry To Our Team</p>
                        <ul class="topmargin-sm">
                            <li>Unlimited Chess Tournament</li>
                            <li>Chess Simul</li>
                            <li>Win Certificates</li>
                            <li>Free For All To Join</li>
                            <li>Avilable Only On Chess.Com And LiChess.Org</li>
                            <li>Get Chance To Win Coupon Or Cash Prizes</li>
                            <li>Member Badge On Our Site</li>
                            <li>Chess is Free For All</li>
                        </ul>
                        <a href="https://lichess.org/team/mini-chess-official" class="secondary-btn topmargin-sm">LiChess.Org</a>
                        <a href="chess.com" class="primary-btn topmargin-sm">Chess.Com</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
     <script src="https://mini-chess.netlify.app/js/menu.js"></script>
      <script src="https://mini-chess-database.netlify.app/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="https://mini-chess-database.netlify.app/assets/js/custom.js"></script>
</body>
</div>
);

export default Home;
