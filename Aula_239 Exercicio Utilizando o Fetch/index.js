import SentryObjects from './sentryObjects.js';
import { getSentry } from './sentryObjects_service.js';

async function loadSentry() {
    let sentry_obj = [];
    let sentryJSON = await getSentry()
    sentryJSON.forEach((sentry) => {
        const newSentry = new SentryObjects(sentry["sentryId"], sentry["name"], sentry["year_range_min"], sentry["year_range_max"])
        sentry_obj.push(newSentry)
    })
    console.log(sentry_obj)
    renderSentry(sentry_obj)
}


function renderSentry(sentry_obj) {
    const ulElement = document.getElementById('sentry-objects');
    sentry_obj.forEach((sentry) => {
        const liElement = document.createElement('li');
        const text = `ID: ${sentry.sentryId} | Name: ${sentry.name} | Risco de colisão entre ${sentry.minAge} e ${sentry.minAge} anos`
        liElement.innerText = text;
        ulElement.appendChild(liElement)
    })

}

loadSentry();