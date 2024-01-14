function solve(ip) {
    if (ip.startsWith(".")) {
        console.log("Ip address should not start with a dot");
        return;
    } else {
        checkOctets(ip);
    }
}

function checkOctets(toCheck) {
    let splitted = toCheck.split(".");
    if (splitted.length == 4) {
        checkValueOfOctets(splitted);
    } else {
        console.log("False, length of IP address should not be less than 4 nor more");
        return;
    }
}

function checkValueOfOctets(arrayOfValues) {
    let checkedIpArray = [];
    for (const el of arrayOfValues) {
        if (el == "00") {
            console.log("False, value of octet can not be 00");
            return;
        } else {
            let convertedToNum = Number(el);
            if (convertedToNum >= 0 && convertedToNum <= 255) {
                checkedIpArray.push(convertedToNum);
            } else {
                console.log("False, octet can not be more than 255 or less than 0");
                return;
            }
        }
    }
    console.log(`True: ${checkedIpArray.join(".")}`);
}

/* solve("192.168.14\n");
solve(".192.168.1.12\n");
solve("192.168.1.257\n");
solve("192.168.1.253\n"); */
solve("192.168.1.00");
solve("192.168@1.1");