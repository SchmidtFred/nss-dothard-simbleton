export const Business = (bus) => {
    return `<section class="business">
                <h2 class="businessType">${bus.companyName}</h2>
                <div class="businessAddress">
                ${bus.addressFullStreet} <br>
                ${bus.addressCity}, ${bus.addressStateCode} ${bus.addressZipCode}
                </div>
            </section>`
}