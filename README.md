<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organic Oasis - Grocery Shop</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #34A853;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .section {
            margin-bottom: 2rem;
        }
        .section-header {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .item {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding: 1rem 0;
        }
        .item img {
            max-width: 100px;
            margin-right: 1rem;
        }
        .item-description {
            flex: 1;
        }
        .item-name {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        .item-price {
            font-weight: bold;
            color: #34A853;
        }
        .app-functionality {
            background-color: #f4f4f4;
            padding: 2rem;
            border-radius: 5px;
        }
        .functionality-header {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .functionality-item {
            margin-bottom: 1rem;
        }
        .functionality-item-title {
            font-size: 1.2rem;
            font-weight: bold;
        }
        .functionality-item-description {
            margin-top: 0.5rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Organic Oasis Grocery Shop</h1>
        <p>Your One-Stop Shop for Fresh and Organic Goodness</p>
    </header>
    <div class="container">
        <section class="section">
            <h2 class="section-header">Fresh Produce</h2>
            <div class="item">
                <img src="images/organic-apple.jpg" alt="Organic Apple">
                <div class="item-description">
                    <h3 class="item-name">Organic Apples</h3>
                    <p>Handpicked, juicy organic apples straight from the orchard. Available in various varieties.</p>
                    <p class="item-price">$1.99 per pound</p>
                </div>
            </div>
            <!-- More produce items -->
        </section>
        <section class="section">
            <h2 class="section-header">Dairy and Eggs</h2>
            <div class="item">
                <img src="images/organic-milk.jpg" alt="Organic Milk">
                <div class="item-description">
                    <h3 class="item-name">Organic Milk</h3>
                    <p>Fresh, creamy organic milk from grass-fed cows. Available in whole, 2%, and skim.</p>
                    <p class="item-price">$3.49 per quart</p>
                </div>
            </div>
            <!-- More dairy and eggs items -->
        </section>
        <!-- More sections for different categories -->
        
        <div class="app-functionality">
            <h2 class="functionality-header">App Functionality</h2>
            <div class="functionality-item">
                <h3 class="functionality-item-title">1. Seamless Online Shopping</h3>
                <p class="functionality-item-description">Browse and purchase your favorite organic products from the comfort of your home. Our user-friendly interface makes online shopping a breeze.</p>
            </div>
            <div class="functionality-item">
                <h3 class="functionality-item-title">2. Personalized Recommendations</h3>
                <p class="functionality-item-description">Get personalized product recommendations based on your preferences and past purchases, ensuring you discover new organic delights.</p>
            </div>
            <div class="functionality-item">
                <h3 class="functionality-item-title">3. Curbside Pickup or Delivery</h3>
                <p class="functionality-item-description">Choose between convenient curbside pickup or doorstep delivery, making it easier than ever to receive your organic essentials.</p>
            </div>
            <div class="functionality-item">
                <h3 class="functionality-item-title">4. Nutritional Information</h3>
                <p class="functionality-item-description">Access detailed nutritional information for each product, empowering you to make informed and health-conscious choices.</p>
            </div>
            <div class="functionality-item">
                <h3 class="functionality-item-title">5. Loyalty Rewards</h3>
                <p class="functionality-item-description">Earn loyalty points with every purchase, which you can redeem for discounts and exclusive offers on future orders.</p>
            </div> 
        </div>
    </div>
</body>
</html>
