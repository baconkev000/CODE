

$(document).ready(function(){    
    var people = [kevin, john, joe, kelly];
    var i = 0;
    var str = $('.template').html();
    var template = Handlebars.compile(str);
    var htmlOut = template(people);

    $('.output').html(htmlOut);

    $("a.next").click(function(){
        if($(".current").next("section").length){
            $(".current").removeClass("current").addClass('previous').next("section").addClass("current");
        }
    })

    $("a.prev").click(function(){
        if($(".current").prev("section").length){
            $(".current").removeClass("current").prev("section").addClass("current").removeClass("previous");
        }
    })

    $('.mySlides').each(function(){
        $(this).css("background-color", $(this)[0].classList[1]);
    })

    $(".open").click(function(){
        console.log($(this).parent().next().toggleClass('ul'));
        $($(this).next()).toggleClass('ul');
    })
/*<section class="mySlides green current">
                <div class="row">
                <div class="col-lg-12 content"><h1>Slide 1</h1>
                    <div class="person">
                        <div>
                            <h3>Kevin Bacon</h3>
                            <h3 class="about">About</h3>
                            <ul class="about-open ul">
                                <li>About</li>
                                <li>Color</li>
                                <li class="food-person">Food</li>
                            </ul>
                            <ul class="person-food ul">
                                <li>Chicken</li>
                            </ul>
                            <h3>Pet</h3>
                            <ul class="pet ul">
                                <li>Name</li>
                                <li>Animal</li>
                                <li>Color</li>
                                <li class="food-pet">Food</li>
                            </ul>
                            <ul class="pet-food ul">
                                <li>Chicken</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </section>*/
})