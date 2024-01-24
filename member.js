function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
    var member = {
        name: 'Sergey',
        age: 30,
        skills: skills
    };
    console.log(member.skills);
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
    console.log(member.skills[3]);
    console.log(member.skills[4]);
    console.log(member.skills.length);
    console.log(member.skills[member.skills.length - 1]);
}