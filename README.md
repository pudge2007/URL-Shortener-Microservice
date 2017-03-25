# URL Shortener Microservice

## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Usage:
###  1. Generate short link:

```text
https://ib-shortener-url.herokuapp.com/new/--your link--
```
#### For example: 
```text
https://ib-shortener-url.herokuapp.com/new/https://www.google.com
```
#### Example output:
```text
{ "original_url":"https://www.google.com", "short_url":"https://ib-shortener-url.herokuapp.com/8170" }
```
###  2. Usage short link:
```text
https://ib-shortener-url.herokuapp.com/8170
```
#

> #### *Created by Borya Ivchenko.*
> [LinkedIn](https://www.linkedin.com/in/boryaivchenko) | [vk](https://vk.com/borya.ivchenko) | [Site](http://boris.of.by) | [CodePen](https://codepen.io/BoryaIvchenko) | [E-Mail](mailto:borya.ivchenko@mail.ru)
