# Refund Processing System

## Overview

The system processes return requests and calculates refund amounts based on various conditions such as product category, return reason, and return time frame. The implementation follows the Strategy design pattern to efficiently handle multiple return policies and supports asynchronous refund processing.

## Features

- **Product Categories**: Handles different categories like electronics, clothing, and home appliances.
- **Return Reasons**: Supports various return reasons such as defective, not as described, and changed mind.
- **Refund Calculation**: Calculates refunds based on the time frame and special conditions for each category.
- **Asynchronous Processing**: Processes refunds asynchronously to handle large inputs efficiently.
- **Error Handling**: Gracefully handles edge cases like invalid dates, unknown categories, and missing fields.

## Project Structure


  - **models/**
    - `ReturnRequest.ts`: Defines the data structure for a return request.
  - **services/**
    - `RefundProcessor.ts`: Contains the logic for processing refunds.
    - `RefundStrategy.ts`: Implements different refund strategies for each category.
  - **utils/**
    - `DateUtils.ts`: Utility functions for date manipulations.
  - **index.ts**: Entry point of the application.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- TypeScript (>= 4.x)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:robinmalhotra/assignment_ss.git
   cd assignment_ss
