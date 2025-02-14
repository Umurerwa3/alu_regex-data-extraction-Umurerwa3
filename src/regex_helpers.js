// Regular Expressions for each thing like email ,  contact , credit card and others

// Regex for Email Addresses
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

// Regex for Phone Numbers (various formats)
const phoneRegex = /(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}/g;

// Regex for URLs
const urlRegex = /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+(?:\/[^\s]*)?/g;

// Regex for Credit Card Numbers
const creditCardRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;

// Regex for Time (24-hour and 12-hour formats)
const timeRegex = /\b(?:[01]?\d|2[0-3]):[0-5]?\d\b|\b(?:1[0-2]|0?[1-9]):[0-5]?\d\s?[APap][Mm]\b/g;

// Regex for HTML Tags
const htmlTagsRegex = /<[^>]+>/g;

// Regex for Hashtags
const hashtagRegex = /#\w+/g;

// Regex for Currency Amounts
const currencyRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;

// Function to extract email addresses from the given text
function extractEmails(text) {
    return text.match(emailRegex) || [];
}

// Function to extract phone numbers from the given text
function extractPhoneNumbers(text) {
    return text.match(phoneRegex) || [];
}

// Function to extract URLs from the given text
function extractUrls(text) {
    return text.match(urlRegex) || [];
}

// Function to extract credit card numbers from the given text
function extractCreditCardNumbers(text) {
    return text.match(creditCardRegex) || [];
}

// Function to extract times (in both 24-hour and 12-hour format) from the given text
function extractTime(text) {
    return text.match(timeRegex) || [];
}

// Function to extract HTML tags from the given text
function extractHtmlTags(text) {
    return text.match(htmlTagsRegex) || [];
}

// Function to extract hashtags from the given text
function extractHashtags(text) {
    return text.match(hashtagRegex) || [];
}

// Function to extract currency amounts from the given text
function extractCurrency(text) {
    return text.match(currencyRegex) || [];
}

// Export all the functions so they can be used in index.js
module.exports = {
    extractEmails,
    extractPhoneNumbers,
    extractUrls,
    extractCreditCardNumbers,
    extractTime,
    extractHtmlTags,
    extractHashtags,
    extractCurrency
};
