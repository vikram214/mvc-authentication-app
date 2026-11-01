# MVC Auth App

A web application built with **ASP.NET Core MVC** that provides user authentication and account management.

## Features

- User registration and sign-in
- Sign-out
- Protected pages for authenticated users
- Form validation and error feedback
- MVC structure with controllers, views, and models

> Include only features implemented in your app.

## Tech Stack

- C#
- ASP.NET Core MVC
- ASP.NET Core Identity (if used)
- [Database, such as MongoDB or SQL Server]

## Prerequisites

- [.NET SDK version]
- [Database server, if required]
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>

### Route table:
| Feature         | HTTP method | Route                              | Access          |
|-----------------|-------------|------------------------------------|-----------------|
| Home page       | GET         |  `/`                               | Public          |
| Register        | GET, POST   | `/Identity/Account/Register`       | Public          |
| Sign in         | GET, POST   | `/Identity/Account/Login`          | Public          |
| Sign out        | POST        | `/Identity/Account/Logout`         | Signed-in users |
| Forgot password | GET, POST   | `/Identity/Account/ForgotPassword` | Public          |
| User dashboard  | GET         | `/Dashboard`                       | Signed-in users |