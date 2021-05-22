class Validation {
    isValidFirstName(firstName) {
        if (!this.isValidMessage(firstName)) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (!this.isValidMessage(lastName)) {
            return false;
        }
        if (lastName.length < 2) {
            return false;
        }
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            console.log('ERROR: Message has to be a text string')
            return false;
        }
        return true;
    }

    isValidPhoneNumber(phoneNumber) {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;