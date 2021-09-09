# hearth-home-search


## Instructions

### Run locally
Please review the screen recording of the functioning app running locally on my computer if the setup steps below is a hussle!

* Clone the repo to your own folder
```
git clone git@github.com:MingyangYan/hearth-home-search.git
```
* install python 3.9
* install pip
```
python3 -m pip install --user --upgrade pip
python3 -m pip --version
```
* install virtualenv
```
python3 -m pip install --user virtualenv
```
* Create a virtual environment
```
python3 -m venv env
```
* Create a virtual environment
```
source env/bin/activate
```
* Install packages
```
$ python3 -m pip install -r requirements.txt
```
* Start Flask Server
```
$ flask run
```
* Open another tab in terminal and go to /hearth-home-search/frontend folder
* Start frontend app
```
$ npm start
```
* Now the webpage http://localhost:3000/ will appear.




* Leaving the virtual environment
```
deactivate
```
## Further Improvments

add pagination; styling; use database
