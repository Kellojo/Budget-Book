
# Budget-Book
A simple electron app designed to help tracking your income and expenses.
It is written with electron and OpenUI5.

Any feature requests or bug reports are welcome, do not hesitate 😀


[![Build Status](https://travis-ci.org/Kellojo/Budget-Book.svg?branch=master)](https://travis-ci.org/Kellojo/Budget-Book)



## Download
Download the latest version from [here](https://github.com/Kellojo/Budget-Book/releases/latest).
Currently only macOS and Windows are supported.

Get the mobile webapp [here](https://budget-book-7ebd4.firebaseapp.com/).
Android & iOS are supported.

## Features
- manage your income and expenses in a safe environment
- all data (except for the transactions created via the app & your categories) is stored locally on your device.
- compare different months and years to gain insight into your spending behaviour
- see in which areas you spend most of your money and in which you have the highest incomes.
- track them anywhere using the responsive [mobile app](https://budget-book-7ebd4.firebaseapp.com/)


## Mobile app sync

With the new app sync, you can now create transactions while not having access to the desktop app. Once you open the desktop app again, you can sign-in and synchronize your transactions. The mobile webapp is available [here](https://budget-book-7ebd4.firebaseapp.com/). Don't forget to add it to your home screen 😄


## Getting started 
The app helps in several ways to track and manage your income and expenses.
This begins with the initial setup:

![Imgur](https://i.imgur.com/RBsSsWS.png)

Here you have to decide wether to start fresh or from a previously exported BudgetP save file. These save files can be created at any time manually.

The next step is adding some transactions. Here BudgetP differentiates between income and expenses. Both are saved as a transaction:

![Imgur](https://i.imgur.com/eqXlaNB.png)

After having saved your transactions, the charts start to fill themselves from the entered data. BudgetP currently offers two break downs, by category and over time:

![Imgur](https://i.imgur.com/cCpfl5n.png)

![Imgur](https://i.imgur.com/sduUOaX.png)

You can gain further insight by filtering your list using the search. You can enter free text oder search against any of the categories you have created. Besides that you can check on a monthly or yearly level and using the charts compare the results with the previous year or month.

If you want to backup your saved transactions, you can hit the export button on the top right. It is going to promt you to select a location for your save file. After the export the save file can then be loaded again, when initially opening the app for the first time (i.e. on a new computer). In the future it is algo going to be possible to alyway save to an external file, so you can easily share it between devices with a service like OneDrive or Google Drive.

![Imgur](https://i.imgur.com/QHefOVR.png)


## Contributing

### Local Development

1. Link the kellojo.m library:
`
    cd lib/kellojo.m
    sudo npm link
    cd ..
    cd ..
    npm link kellojo.m
`
2. Install the development dependencies
`
    npm install -only=dev
`