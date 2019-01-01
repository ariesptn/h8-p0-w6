function generateGymSchedule(members, schedules) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const result = [];
    const isSportAvailableOnSpecifiedDay = (name, day) => {
        const schedulesIndex = schedules.map(e => e.name).indexOf(name);
        if (schedulesIndex < 0) {
            return false;
        }
        if (schedules[schedulesIndex].days.indexOf(day) < 0) {
            return false;
        }
        const activities = new Set();
        for (const r of result) {
            if (r[day] !== undefined) {
                activities.add(r[day]);
            }
        }
        activities.add(schedules[schedulesIndex].name);
        if (activities.size > 2) {
            return false;
        }
        return true;
    };
    for (const m of members) {
        result.push({ name: m.name });
        for (const s of m.sports) {
            for (const d of days) {
                if (isSportAvailableOnSpecifiedDay(s, d) && result[result.length - 1][d] === undefined) {
                    result[result.length - 1][d] = s;
                    break;
                }
            }
        }
    }
    let resultString = '    | ';
    for (const d of days) {
        resultString += d + ' | ';
    }
    resultString += '\n';
    for (const r of result) {
        resultString += r.name.substring(0, 3) + ' | ';
        for (const d of days) {
            if (r[d] !== undefined) {
                resultString += r[d].substring(0, 3) + ' | ';
            }
            else {
                resultString += '    | ';
            }
        }
        resultString += '\n';
    }
    console.log(resultString);
}
var schedules = [{
        name: "Boxing",
        days: ["Mon", "Wed", "Sat"]
    }, {
        name: "Jiu Jitsu",
        days: ["Wed", "Thu"]
    }, {
        name: "Krav Maga",
        days: ["Mon", "Fri"]
    }, {
        name: "Muay Thai",
        days: ["Sat"]
    }, {
        name: "Karate",
        days: ["Mon", "Sun"]
    }];
var members = [{
        name: "Awtian",
        sports: ["Karate", "Krav Maga"]
    }, {
        name: "Dimas",
        sports: ["Muay Thai", "Karate", "Boxing"]
    }, {
        name: "Semmi",
        sports: ["Jiu Jitsu", "Krav Maga"]
    }, {
        name: "Wika",
        sports: ["Krav Maga"]
    }, {
        name: "Ryan",
        sports: ["Boxing", "Muay Thai", "Jiu Jitsu", "Krav Maga"]
    }];
generateGymSchedule(members, schedules);
/* OUTPUT
    | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
Awt | Kar |     |     |     | Kra |     |     |
Dim | Kar |     | Box |     |     | Mua |     |
Sem | Kra |     | Jiu |     |     |     |     |
Wik | Kra |     |     |     |     |     |     |
Rya | Kra |     | Box | Jiu |     | Mua |     |
*/
var schedules2 = [{
        name: "Boxing",
        days: ["Fri", "Sat", "Sun"]
    }, {
        name: "Jiu Jitsu",
        days: ["Thu"]
    }, {
        name: "Krav Maga",
        days: ["Fri", "Sun"]
    }, {
        name: "Muay Thai",
        days: ["Sat", "Sun"]
    }, {
        name: "Karate",
        days: ["Fri", "Sat"]
    }];
var members2 = [{
        name: "Awtian",
        sports: ["Karate", "Krav Maga"]
    }, {
        name: "Dimas",
        sports: ["Muay Thai", "Karate", "Boxing"]
    }, {
        name: "Semmi",
        sports: ["Jiu Jitsu", "Krav Maga"]
    }, {
        name: "Wika",
        sports: ["Krav Maga"]
    }, {
        name: "Ryan",
        sports: ["Boxing", "Muay Thai", "Jiu Jitsu", "Krav Maga"]
    }];
generateGymSchedule(members2, schedules2);
/* OUTPUT
    | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
Awt |     |     |     |     | Kar |     | Kra |
Dim |     |     |     |     | Kar | Mua | Box |
Sem |     |     |     | Jiu | Kra |     |     |
Wik |     |     |     |     | Kra |     |     |
Rya |     |     |     | Jiu | Kra | Box |     |
*/
/*
## GENERATE GYM SCHEDULE

Generate Gym Schedule adalah sebuah fungsi untuk menampilkan jadwal dari masing-masing member. Fungsi akan menerima 2 input parameter berupa `members` dan `schedules`. Parameter `members` merupakan nama member dan kegiatan apa saja yang mereka ambil dan parameter `schedules` merupakan jadwal dari masing-masing kegiatan pada gym tersebut.

**Berikut adalah rules dalam pembuatan jadwal :**
  - Nama member yang mengisi jadwal sesuai dengan urutan index array of members yaitu dari index ke-0.
  - Nama member dan nama kegiatan saat ditampilkan hanya 3 huruf pertamanya saja.
  - Semua kegiatan pada member harus terisi semua pada jadwal. **Asumsi jadwal kegiatan yang bentrok selalu memiliki alternatif hari lain (lihat pada test case)**
  - Pada masing-masing hari hanya boleh terdapat 2 jenis kegiatan saja. Jadi contoh apabila pada hari senin sudah ada kegiatan `karate` dan `krav maga`, apabila kegiatan `boxing` ternyata juga terdapat di hari senin, maka kegiatan `boxing` harus mencari hari yang lain.
*/
//# sourceMappingURL=generateGymSchedule.js.map