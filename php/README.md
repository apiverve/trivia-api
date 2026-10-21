# Trivia Generator API - PHP Package

Trivia Generator is a trivia and quiz API that serves random trivia questions complete with multiple-choice options and the correct answer. Paid plans can filter questions across topics like history, science, geography, and pop culture.

## Installation

Install via Composer:

```bash
composer require apiverve/trivia
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Trivia\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['category' => 'general']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Trivia\Client;
use APIVerve\Trivia\Exceptions\APIException;
use APIVerve\Trivia\Exceptions\ValidationException;

try {
    $response = $client->execute(['category' => 'general']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "question": "Is the Pink Cadillac the trademark of Mary Kay beauty products?",
    "answer": "Yes",
    "options": [
      "A Yes",
      "B No"
    ],
    "category": "general"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/trivia?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/trivia?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/trivia?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
