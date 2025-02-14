//Importing functions from regex_helpers.js
const { extractEmails, extractPhoneNumbers, extractUrls, extractCreditCardNumbers, extractTime, extractHtmlTags, extractHashtags, extractCurrency } = require('./regex_helpers');

// sample text to be used to demonstrate regex functionality
const sampleText = `
    Contact us at john.doe@example.com or jane_smith123@my-domain.org for more details.
    Visit our website: https://www.example.com or check our blog at http://blog.example.org.
    For phone support, you can reach us at (123) 456-7890 or 987-654-3210.
    If you're shopping, your credit card number could be 1234 5678 9012 3456 or 1234-5678-9012-3456.
    Our office opens at 9:00 AM or 14:00 (2:00 PM) depending on the time zone.
    Here's a simple HTML tag: <div class="container">Hello World!</div> and another <img src="image.jpg" alt="image description">
    Join us on Twitter with hashtags like #TechNews and #Programming.
    Prices are as follows: $19.99, $50.00, or $1,000.50.
`;

// Function to extract emails phone Numbers ,Urls , credit card numbers , times , HTML Tags , hashtags ,current amounts
function extractAndLogData(text) {
    console.log("Extracted Emails:");
    console.log(extractEmails(text));
    console.log("\nExtracted Phone Numbers:");
    console.log(extractPhoneNumbers(text));
    console.log("\nExtracted URLs:");
    console.log(extractUrls(text));
    console.log("\nExtracted Credit Card Numbers:");
    console.log(extractCreditCardNumbers(text));
    console.log("\nExtracted Times:");
    console.log(extractTime(text));
    console.log("\nExtracted HTML Tags:");
    console.log(extractHtmlTags(text));
    console.log("\nExtracted Hashtags:");
    console.log(extractHashtags(text));
    console.log("\nExtracted Currency Amounts:");
    console.log(extractCurrency(text));
}
