# Harsha Ride Booking App

A modern ride-booking frontend built with React and Vite, inspired by apps like Rapido and Ola.  
This project focuses on a polished, mobile-first user experience with responsive layouts, animated interactions, and a connected booking flow from ride selection to payment and live tracking.

## Overview

This application simulates a real-world ride booking journey:

- Authentication with login and signup validation
- Home screen with pickup and drop planning
- Ride selection for Bike, Auto, and Car
- Dynamic fare estimation with surge pricing
- Ride scheduling for later bookings
- Multi-stop ride configuration
- Nearby drivers animation on a map-like surface
- Payment flow with UPI, Card, and Cash
- Wallet usage and coupon support
- Live ride tracking with driver assignment and movement simulation
- Driver call and chat UI
- Notifications for ride updates
- SOS emergency action screen
- Ride history, profile, and rating flow
- Dark and light theme support

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion

## Project Goals

The main goal of this project is to deliver a frontend that feels close to a production ride-booking experience:

- clean and reusable component structure
- clear page flow and route organization
- responsive design for desktop and mobile
- animation without making the UI heavy
- easy-to-read code for future maintenance and collaboration

## Main Features

### 1. Authentication

- Login and signup forms
- Basic field validation
- Redirect into the app after successful submission

### 2. Ride Planning

- Pickup and drop inputs
- Schedule later option
- Multi-stop management
- Fare summary based on selected ride and trip conditions

### 3. Ride Selection

- Separate Bike, Auto, and Car cards
- Vehicle-specific styling and fare display
- Surge-aware estimated fare
- Booking summary section

### 4. Payment

- Confirm payment action opens a real checkout panel
- UPI input flow
- Card details input flow
- Cash selection flow
- Success message after payment
- Wallet toggle and coupon application

### 5. Live Tracking

- Driver assignment section
- Driver route movement simulation
- Nearby drivers animation
- Ride progress UI
- Call and chat driver actions

### 6. Safety and Communication

- Notifications page for ride events
- SOS page for emergency alert state
- In-app ride update messaging

## Folder Structure

```text
src/
  components/      Shared UI pieces and icons
  context/         Global ride state
  data/            Mock data used across the app
  hooks/           Custom hooks
  pages/           Route-level screens
  Routes/          App routes
```

## Key Screens

- `Home`
- `RideSelection`
- `Payment`
- `Tracking`
- `Notifications`
- `SOS`
- `History`
- `Profile`
- `Rating`
- `Auth`

## How to Run

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Current Quality Status

The project has been verified with:

- `npm run lint`
- `npm run build`

Both commands complete successfully.

## Notes for Review

This is a frontend-focused implementation using local state and mock ride data to simulate a production booking flow.  
It is designed so backend APIs can be integrated later without needing a major UI rewrite.

## Suggested Next Enhancements

- connect forms and payment flow to real APIs
- integrate real maps and location search
- add backend-based authentication
- persist ride history and notifications
- connect chat and SOS to live services

## Author Summary

This project demonstrates:

- UI/UX thinking for consumer product design
- responsive frontend engineering
- component reuse and route-based structure
- animated product flows with Framer Motion
- practical simulation of a ride-booking platform
