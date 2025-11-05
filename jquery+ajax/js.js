$(document).ready(function () {



// add user info on console and website
    $("#search_button").on('click', function () {

        let username = $("input").val();
        $.ajax(`https://api.github.com/users/${username}`, {

            success: function (results) {
                console.log(results);
                let userinfo = document.getElementById("userinfo_html");
                userinfo.innerHTML = `
                <div class="firstDiv">
                    <div class="secondDiv">
                        <p class="styleP" style="font-size:30px;">${results.login}</p>
                        <img src="${results.avatar_url}" alt="" width="200px">
                        <div style="display: flex; flex-direction:row;">
                        <p class="styleP" style="margin-right: 10px; margin-left: 5px;">Followers: ${results.followers}</p>
                        <p class="styleP">Following: ${results.following}</p>
                        </div>
                        <p class="styleP">Type: ${results.type}</p>
                        <a href="${results.html_url}">GitHub Profile link</a>
                    </div>
                </div>
                `;
            },
            error: function (err) {
                //error status in console
                console.log(err.statusText)
            },

        })



    });
});

