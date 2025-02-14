// Regular Expressions for each thing like email ,  contact , credit card and others

// Regex for Email Addresses
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

// Regex for Phone Numbers (various formats)
const phoneRegex = /(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}/g;

// Regex for URLs
const urlRegex = /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+(?:\/[^\s]*)?/g;

// Regex for Credit Card Numbers
const creditCardRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;

