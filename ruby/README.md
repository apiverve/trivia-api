# Trivia Generator API - Ruby Gem

Trivia Generator is a trivia and quiz API that serves random trivia questions complete with multiple-choice options and the correct answer. Paid plans can filter questions across topics like history, science, geography, and pop culture.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_trivia'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_trivia
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_trivia'

# Initialize the client
client = APIVerve::Trivia::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ category: "general" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ category: "general" })
  puts response["data"]
rescue APIVerve::Trivia::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Trivia::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Trivia::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/trivia?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/trivia?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/trivia?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
