let prompt = require(`prompt-sync`)()



const contacts = [
    { name: "Adam", phone: "0612345678" },
    { name: "Youssef", phone: "0623456789" },
    { name: "Sara", phone: "0634567890" },
    { name: "Omar", phone: "0645678901" },
    { name: "Salma", phone: "0656789012" },
    { name: "Mehdi", phone: "0667890123" },
    { name: "Imane", phone: "0678901234" },
    { name: "Hamza", phone: "0689012345" },
    { name: "Aya", phone: "0690123456" },
    { name: "Anas", phone: "0601234567" }
];



const couleurs = {
    reset: "\x1b[0m",
    rouge: "\x1b[31m",
    vert: "\x1b[32m",
    jaune: "\x1b[33m",
    bleu: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    gras: "\x1b[1m",
};
function colorer(texte, code) {
  return code + texte + couleurs.reset;
}
while (true) {
    console.log(colorer(`    =========================================================
    ========= INTERNATIONAL CONTACT BOOK 2026-2027 ==========
    =========================================================` , couleurs.bleu))

    console.log(colorer(`
         __________________________________________
         |_N_]______________Menu__________________|
         [_1_]_look for a contact_________________|
         [_2_]_add a new contact__________________|
         [_3_]_display all contacts_______________|
         [_4_]_Delete a contact___________________|
         [_5_]_Exit_______________________________|
         `, couleurs.jaune))

    let ask = Number(prompt(colorer("Please select an option : ", couleurs.reset)))

    if (ask === 5) {
        console.log(colorer("IT WAS GOOD SEEING YOU ! ", couleurs.vert))
        break
    }

    switch (ask) {
        case 1:
            lookfor()
            break
        case 2:
            AddNew()
            break
        case 3:
            DisplayAll()
            break
        case 4:
            DeleteContact()
            break
        default:
            console.log(colorer("PLEASE SELECT A VALID OPTION !", couleurs.rouge))
            break
    }
}

function lookfor() {
    let name = prompt(colorer("Enter the name of the contact you want to look for: ", couleurs.reset))
    let found = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (found) {
        console.log(colorer(`Contact found: ${found.name} - ${found.phone}`, couleurs.vert))
    } else {
        console.log(colorer("Contact not found.", couleurs.rouge))
    }
}

function AddNew() {
    let name = prompt(colorer("Enter the name of the new contact: ", couleurs.reset))
    let phone = prompt(colorer("Enter the phone number of the new contact: ", couleurs.reset))
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        console.log(colorer("This contact is already in the contact list!", couleurs.rouge))
    } else {
        contacts.push({ name, phone })
        console.log(colorer(`Contact added: ${name} - ${phone}`, couleurs.vert))
    }
    
}

function DisplayAll() {
    console.log(colorer("All contacts:", couleurs.cyan))
    contacts.forEach(contact => {
        console.log(colorer(`- ${contact.name}: ${contact.phone}`, couleurs.cyan))
    })
}

function DeleteContact() {
    let name = prompt(colorer("Enter the name of the contact you want to delete: ", couleurs.reset))
    let index = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (index !== -1) {
        contacts.splice(index, 1)
        console.log(colorer("Contact deleted.", couleurs.vert))
    } else {
        console.log(colorer("Contact not found.", couleurs.rouge))
    }
}