$(document).ready(function () {
    var timetableData = [
        { time: '06:00-07:30', Monday: 'Jiu-jitsu', Tuesday: 'Karate', Wednesday: 'Judo', Thursday: 'Jiu-jitsu', Friday: 'Muay Thai', Saturday: '', Sunday: '' },
        { time: '08:00-10:00', Monday: 'Muay Thai', Tuesday: 'Private tuition', Wednesday: 'Private tuition', Thursday: 'Private tuition', Friday: 'Jiu-jitsu', Saturday: 'Private tuition', Sunday: 'Private tuition' },
        { time: '10:30-12:00', Monday: 'Private tuition', Tuesday: 'Private tuition', Wednesday: 'Private tuition', Thursday: 'Private tuition', Friday: 'Private tuition', Saturday: 'Judo', Sunday: 'Karate' },
        { time: '13:00-14:30', Monday: 'Open mat/personal practice', Tuesday: 'Open mat/personal practice', Wednesday: 'Open mat/personal practice', Thursday: 'Open mat/personal practice', Friday: 'Open mat/personal practice', Saturday: 'Karate', Sunday: 'Judo' },
        { time: '15:00-17:00', Monday: 'Kids jiu-jitsu', Tuesday: 'Kids judo', Wednesday: 'Kids karate', Thursday: 'Kids jiu-jitsu', Friday: 'Kids judo', Saturday: 'Muay Thai', Sunday: 'Jiu-jitsu' },
        { time: '17:30-19:00', Monday: 'Karate', Tuesday: 'Muay Thai', Wednesday: 'Judo', Thursday: 'Jiu-jitsu', Friday: 'Muay Thai', Saturday: '', Sunday: '' },
        { time: '19:00-21:00', Monday: 'Jiu-jitsu', Tuesday: 'Judo', Wednesday: 'Jiu-jitsu', Thursday: 'Karate', Friday: 'Private tuition', Saturday: '', Sunday: '' }
    ];

    var tableBody = $('#timetable tbody');

    $.each(timetableData, function (index, rowData) {
        var row = $('<tr>');
        row.append($('<td>').text(rowData.time));
        row.append($('<td>').text(rowData.Monday));
        row.append($('<td>').text(rowData.Tuesday));
        row.append($('<td>').text(rowData.Wednesday));
        row.append($('<td>').text(rowData.Thursday));
        row.append($('<td>').text(rowData.Friday));
        row.append($('<td>').text(rowData.Saturday));
        row.append($('<td>').text(rowData.Sunday));
        tableBody.append(row);
    });



    const params = new URLSearchParams(window.location.search);
    const className = params.get("class");


    const classesData = {
        "jiu-jitsu": {
            title: "Jiu-Jitsu",
            img: "./img/jiu-jitsu.png",
            description: "Jiu-Jitsu is a ground-based martial art that focuses on grappling, submissions, and positional control. Students learn how to use leverage and technique rather than strength, making it highly effective for self-defense and suitable for all body types. BJJ builds patience, problem-solving skills, and resilience while providing a challenging full-body workout."
        },
        "karate": {
            title: "Karate",
            img: "./img/karate.png",
            description: "Karate focuses on discipline, precision, and self-control. Students learn powerful strikes, blocks, and forms that build strength, coordination, and confidence, while developing respect for tradition. It is an excellent choice for beginners and experienced practitioners alike, helping to sharpen focus and promote personal growth both inside and outside the training."
        },
        "judo": {
            title: "Judo",
            img: "./img/judo.png",
            description: "Judo emphasizes throws, grappling, and ground control techniques. This class builds balance, agility, and resilience, teaching students how to use leverage and timing to overcome opponents. Judo also instills respect, patience, and problem-solving skills, making it a well-rounded martial art for self-defense and physical fitness."
        },
        "muay-thai": {
            title: "Muay Thai",
            img: "./img/muay-thai.png",
            description: "Known as the “Art of Eight Limbs,” Muay Thai combines punches, kicks, elbows, and knee strikes for a powerful stand-up fighting style. This class develops striking precision, endurance, and explosive power, while also teaching clinch techniques for close-range combat. Muay Thai is both a rigorous workout and a highly practical martial art for fitness and self-defense."
        }
    };


    if (className && classesData[className]) {
        $("#class-title").text(classesData[className].title);
        $("#class-img").attr("src", classesData[className].img).attr("alt", classesData[className].title);
        $("#class-description").text(classesData[className].description);
    } else {
        $("#class-title").text("Class Not Found");
        $("#class-description").text("Please go back and select a class.");
    }


    const instructors = {
        "mauricio-gomez": {
            name: "Mauricio Gomez",
            role: "Gym owner / Head martial arts coach",
            img: "./img/mauricio-gomez.png",
            details: `
            Coaches in all martial arts<br>
            4th Dan Blackbelt judo<br>
            3rd Dan Blackbelt jiu-jitsu<br>
            1st Dan Blackbelt karate<br>
            Accredited Muay Thai coach
        `
        },
        "sarah-nova": {
            name: "Sarah Nova",
            role: "Assistant martial arts coach",
            img: "./img/sarah-nova.png",
            details: `5th Dan karate`
        },
        "guy-victory": {
            name: "Guy Victory",
            role: "Assistant martial arts coach",
            img: "./img/guy-victory.png",
            details: `
            2nd Dan Blackbelt jiu-jitsu<br>
            1st Dan Blackbelt judo
        `
        },
        "morris-davis": {
            name: "Morris Davis",
            role: "Assistant martial arts coach",
            img: "./img/morris-davis.png",
            details: `
            Accredited Muay Thai coach<br>
            3rd Dan Blackbelt karate
        `
        },
        "traci-santiago": {
            name: "Traci Santiago",
            role: "Fitness coach",
            img: "./img/traci-santiago.png",
            details: `
            BSc in Sports Science<br>
            Qualified in health and nutrition<br>
            Specialises in devising strength and conditioning programs for combat athletes
        `
        },
        "harpreet-kaur": {
            name: "Harpreet Kaur",
            role: "Fitness coach",
            img: "./img/harpreet-kaur.png",
            details: `
            BSc in Physiotherapy<br>
            MSc in Sports Science
        `
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const instructorId = urlParams.get("id");

    if (instructorId && instructors[instructorId]) {
        const instructor = instructors[instructorId];

        $("#instructor-name").text(instructor.name);
        $("#instructor-role").text(instructor.role);
        $("#instructor-img").attr("src", instructor.img).attr("alt", instructor.name + " profile");
        $("#instructor-info").html(instructor.details);
    }
});