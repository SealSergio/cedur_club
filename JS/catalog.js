// Burger navigation

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const background = document.querySelector(".body_back");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  background.classList.toggle("be");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

background.addEventListener("click", closeOnBack);

function closeOnBack() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  background.classList.remove("be");
}

// Product cards

//  Card 1

const title_1 = document.querySelector(".front-01");

const title_back_1 = document.querySelector(".product-title-dark-01");

const card_1 = document.querySelector(".card-inner-01")

title_1.addEventListener("click", function (e) {
  card_1.classList.toggle('is-flipped');
});

title_back_1.addEventListener("click", function (e) {
  card_1.classList.remove('is-flipped');
});

//  Card 2

const title_2 = document.querySelector(".front-02");

const title_back_2 = document.querySelector(".product-title-dark-02");

const card_2 = document.querySelector(".card-inner-02")

title_2.addEventListener("click", function (e) {
  card_2.classList.toggle('is-flipped');
});

title_back_2.addEventListener("click", function (e) {
  card_2.classList.remove('is-flipped');
});

//  Card 3

const title_3 = document.querySelector(".front-03");

const title_back_3 = document.querySelector(".product-title-dark-03");

const card_3 = document.querySelector(".card-inner-03")

title_3.addEventListener("click", function (e) {
  card_3.classList.toggle('is-flipped');
});

title_back_3.addEventListener("click", function (e) {
  card_3.classList.remove('is-flipped');
});

//  Card 4

const title_4 = document.querySelector(".front-04");

const title_back_4 = document.querySelector(".product-title-dark-04");

const card_4 = document.querySelector(".card-inner-04")

title_4.addEventListener("click", function (e) {
  card_4.classList.toggle('is-flipped');
});

title_back_4.addEventListener("click", function (e) {
  card_4.classList.remove('is-flipped');
});

//  Card 5

const title_5 = document.querySelector(".front-05");

const title_back_5 = document.querySelector(".product-title-dark-05");

const card_5 = document.querySelector(".card-inner-05")

title_5.addEventListener("click", function (e) {
  card_5.classList.toggle('is-flipped');
});

title_back_5.addEventListener("click", function (e) {
  card_5.classList.remove('is-flipped');
});

//  Card 6

const title_6 = document.querySelector(".front-06");

const title_back_6 = document.querySelector(".product-title-dark-06");

const card_6 = document.querySelector(".card-inner-06")

title_6.addEventListener("click", function (e) {
  card_6.classList.toggle('is-flipped');
});

title_back_6.addEventListener("click", function (e) {
  card_6.classList.remove('is-flipped');
});

//  Card 7

const title_7 = document.querySelector(".front-07");

const title_back_7 = document.querySelector(".product-title-dark-07");

const card_7 = document.querySelector(".card-inner-07")

title_7.addEventListener("click", function (e) {
  card_7.classList.toggle('is-flipped');
});

title_back_7.addEventListener("click", function (e) {
  card_7.classList.remove('is-flipped');
});

//  Card 58

const title_58 = document.querySelector(".front-58");

const title_back_58 = document.querySelector(".product-title-dark-58");

const card_58 = document.querySelector(".card-inner-58")

title_58.addEventListener("click", function (e) {
  card_58.classList.toggle('is-flipped');
});

title_back_58.addEventListener("click", function (e) {
  card_58.classList.remove('is-flipped');
});

//  Card 8

const title_8 = document.querySelector(".front-08");

const title_back_8 = document.querySelector(".product-title-dark-08");

const card_8 = document.querySelector(".card-inner-08")

title_8.addEventListener("click", function (e) {
  card_8.classList.toggle('is-flipped');
});

title_back_8.addEventListener("click", function (e) {
  card_8.classList.remove('is-flipped');
});

//  Card 9

const title_9 = document.querySelector(".front-09");

const title_back_9 = document.querySelector(".product-title-dark-09");

const card_9 = document.querySelector(".card-inner-09")

title_9.addEventListener("click", function (e) {
  card_9.classList.toggle('is-flipped');
});

title_back_9.addEventListener("click", function (e) {
  card_9.classList.remove('is-flipped');
});

//  Card 10

const title_10 = document.querySelector(".front-10");

const title_back_10 = document.querySelector(".product-title-dark-10");

const card_10 = document.querySelector(".card-inner-10")

title_10.addEventListener("click", function (e) {
  card_10.classList.toggle('is-flipped');
});

title_back_10.addEventListener("click", function (e) {
  card_10.classList.remove('is-flipped');
});

//  Card 11

const title_11 = document.querySelector(".front-11");

const title_back_11 = document.querySelector(".product-title-dark-11");

const card_11 = document.querySelector(".card-inner-11")

title_11.addEventListener("click", function (e) {
  card_11.classList.toggle('is-flipped');
});

title_back_11.addEventListener("click", function (e) {
  card_11.classList.remove('is-flipped');
});

//  Card 12

const title_12 = document.querySelector(".front-12");

const title_back_12 = document.querySelector(".product-title-dark-12");

const card_12 = document.querySelector(".card-inner-12")

title_12.addEventListener("click", function (e) {
  card_12.classList.toggle('is-flipped');
});

title_back_12.addEventListener("click", function (e) {
  card_12.classList.remove('is-flipped');
});

//  Card 13

const title_13 = document.querySelector(".front-13");

const title_back_13 = document.querySelector(".product-title-dark-13");

const card_13 = document.querySelector(".card-inner-13")

title_13.addEventListener("click", function (e) {
  card_13.classList.toggle('is-flipped');
});

title_back_13.addEventListener("click", function (e) {
  card_13.classList.remove('is-flipped');
});

//  Card 14

const title_14 = document.querySelector(".front-14");

const title_back_14 = document.querySelector(".product-title-dark-14");

const card_14 = document.querySelector(".card-inner-14")

title_14.addEventListener("click", function (e) {
  card_14.classList.toggle('is-flipped');
});

title_back_14.addEventListener("click", function (e) {
  card_14.classList.remove('is-flipped');
});

//  Card 16

const title_16 = document.querySelector(".front-16");

const title_back_16 = document.querySelector(".product-title-dark-16");

const card_16 = document.querySelector(".card-inner-16")

title_16.addEventListener("click", function (e) {
  card_16.classList.toggle('is-flipped');
});

title_back_16.addEventListener("click", function (e) {
  card_16.classList.remove('is-flipped');
});

//  Card 18

const title_18 = document.querySelector(".front-18");

const title_back_18 = document.querySelector(".product-title-dark-18");

const card_18 = document.querySelector(".card-inner-18")

title_18.addEventListener("click", function (e) {
  card_18.classList.toggle('is-flipped');
});

title_back_18.addEventListener("click", function (e) {
  card_18.classList.remove('is-flipped');
});

//  Card 19

const title_19 = document.querySelector(".front-19");

const title_back_19 = document.querySelector(".product-title-dark-19");

const card_19 = document.querySelector(".card-inner-19")

title_19.addEventListener("click", function (e) {
  card_19.classList.toggle('is-flipped');
});

title_back_19.addEventListener("click", function (e) {
  card_19.classList.remove('is-flipped');
});

//  Card 20

const title_20 = document.querySelector(".front-20");

const title_back_20 = document.querySelector(".product-title-dark-20");

const card_20 = document.querySelector(".card-inner-20")

title_20.addEventListener("click", function (e) {
  card_20.classList.toggle('is-flipped');
});

title_back_20.addEventListener("click", function (e) {
  card_20.classList.remove('is-flipped');
});

//  Card 22

const title_22 = document.querySelector(".front-22");

const title_back_22 = document.querySelector(".product-title-dark-22");

const card_22 = document.querySelector(".card-inner-22")

title_22.addEventListener("click", function (e) {
  card_22.classList.toggle('is-flipped');
});

title_back_22.addEventListener("click", function (e) {
  card_22.classList.remove('is-flipped');
});

//  Card 23

const title_23 = document.querySelector(".front-23");

const title_back_23 = document.querySelector(".product-title-dark-23");

const card_23 = document.querySelector(".card-inner-23")

title_23.addEventListener("click", function (e) {
  card_23.classList.toggle('is-flipped');
});

title_back_23.addEventListener("click", function (e) {
  card_23.classList.remove('is-flipped');
});

//  Card 25

const title_25 = document.querySelector(".front-25");

const title_back_25 = document.querySelector(".product-title-dark-25");

const card_25 = document.querySelector(".card-inner-25")

title_25.addEventListener("click", function (e) {
  card_25.classList.toggle('is-flipped');
});

title_back_25.addEventListener("click", function (e) {
  card_25.classList.remove('is-flipped');
});

//  Card 26

const title_26 = document.querySelector(".front-26");

const title_back_26 = document.querySelector(".product-title-dark-26");

const card_26 = document.querySelector(".card-inner-26")

title_26.addEventListener("click", function (e) {
  card_26.classList.toggle('is-flipped');
});

title_back_26.addEventListener("click", function (e) {
  card_26.classList.remove('is-flipped');
});

//  Card 27

const title_27 = document.querySelector(".front-27");

const title_back_27 = document.querySelector(".product-title-dark-27");

const card_27 = document.querySelector(".card-inner-27")

title_27.addEventListener("click", function (e) {
  card_27.classList.toggle('is-flipped');
});

title_back_27.addEventListener("click", function (e) {
  card_27.classList.remove('is-flipped');
});

//  Card 28

const title_28 = document.querySelector(".front-28");

const title_back_28 = document.querySelector(".product-title-dark-28");

const card_28 = document.querySelector(".card-inner-28")

title_28.addEventListener("click", function (e) {
  card_28.classList.toggle('is-flipped');
});

title_back_28.addEventListener("click", function (e) {
  card_28.classList.remove('is-flipped');
});

//  Card 29

const title_29 = document.querySelector(".front-29");

const title_back_29 = document.querySelector(".product-title-dark-29");

const card_29 = document.querySelector(".card-inner-29")

title_29.addEventListener("click", function (e) {
  card_29.classList.toggle('is-flipped');
});

title_back_29.addEventListener("click", function (e) {
  card_29.classList.remove('is-flipped');
});

//  Card 30

const title_30 = document.querySelector(".front-30");

const title_back_30 = document.querySelector(".product-title-dark-30");

const card_30 = document.querySelector(".card-inner-30")

title_30.addEventListener("click", function (e) {
  card_30.classList.toggle('is-flipped');
});

title_back_30.addEventListener("click", function (e) {
  card_30.classList.remove('is-flipped');
});

//  Card 31

const title_31 = document.querySelector(".front-31");

const title_back_31 = document.querySelector(".product-title-dark-31");

const card_31 = document.querySelector(".card-inner-31")

title_31.addEventListener("click", function (e) {
  card_31.classList.toggle('is-flipped');
});

title_back_31.addEventListener("click", function (e) {
  card_31.classList.remove('is-flipped');
});

//  Card 32

const title_32 = document.querySelector(".front-32");

const title_back_32 = document.querySelector(".product-title-dark-32");

const card_32 = document.querySelector(".card-inner-32")

title_32.addEventListener("click", function (e) {
  card_32.classList.toggle('is-flipped');
});

title_back_32.addEventListener("click", function (e) {
  card_32.classList.remove('is-flipped');
});

//  Card 33

const title_33 = document.querySelector(".front-33");

const title_back_33 = document.querySelector(".product-title-dark-33");

const card_33 = document.querySelector(".card-inner-33")

title_33.addEventListener("click", function (e) {
  card_33.classList.toggle('is-flipped');
});

title_back_33.addEventListener("click", function (e) {
  card_33.classList.remove('is-flipped');
});

//  Card 34

const title_34 = document.querySelector(".front-34");

const title_back_34 = document.querySelector(".product-title-dark-34");

const card_34 = document.querySelector(".card-inner-34")

title_34.addEventListener("click", function (e) {
  card_34.classList.toggle('is-flipped');
});

title_back_34.addEventListener("click", function (e) {
  card_34.classList.remove('is-flipped');
});

//  Card 35

const title_35 = document.querySelector(".front-35");

const title_back_35 = document.querySelector(".product-title-dark-35");

const card_35 = document.querySelector(".card-inner-35")

title_35.addEventListener("click", function (e) {
  card_35.classList.toggle('is-flipped');
});

title_back_35.addEventListener("click", function (e) {
  card_35.classList.remove('is-flipped');
});

//  Card 36

const title_36 = document.querySelector(".front-36");

const title_back_36 = document.querySelector(".product-title-dark-36");

const card_36 = document.querySelector(".card-inner-36")

title_36.addEventListener("click", function (e) {
  card_36.classList.toggle('is-flipped');
});

title_back_36.addEventListener("click", function (e) {
  card_36.classList.remove('is-flipped');
});

//  Card 37

const title_37 = document.querySelector(".front-37");

const title_back_37 = document.querySelector(".product-title-dark-37");

const card_37 = document.querySelector(".card-inner-37")

title_37.addEventListener("click", function (e) {
  card_37.classList.toggle('is-flipped');
});

title_back_37.addEventListener("click", function (e) {
  card_37.classList.remove('is-flipped');
});

//  Card 38

const title_38 = document.querySelector(".front-38");

const title_back_38 = document.querySelector(".product-title-dark-38");

const card_38 = document.querySelector(".card-inner-38")

title_38.addEventListener("click", function (e) {
  card_38.classList.toggle('is-flipped');
});

title_back_38.addEventListener("click", function (e) {
  card_38.classList.remove('is-flipped');
});

//  Card 39

const title_39 = document.querySelector(".front-39");

const title_back_39 = document.querySelector(".product-title-dark-39");

const card_39 = document.querySelector(".card-inner-39")

title_39.addEventListener("click", function (e) {
  card_39.classList.toggle('is-flipped');
});

title_back_39.addEventListener("click", function (e) {
  card_39.classList.remove('is-flipped');
});

//  Card 40

const title_40 = document.querySelector(".front-40");

const title_back_40 = document.querySelector(".product-title-dark-40");

const card_40 = document.querySelector(".card-inner-40")

title_40.addEventListener("click", function (e) {
  card_40.classList.toggle('is-flipped');
});

title_back_40.addEventListener("click", function (e) {
  card_40.classList.remove('is-flipped');
});

//  Card 41

const title_41 = document.querySelector(".front-41");

const title_back_41 = document.querySelector(".product-title-dark-41");

const card_41 = document.querySelector(".card-inner-41")

title_41.addEventListener("click", function (e) {
  card_41.classList.toggle('is-flipped');
});

title_back_41.addEventListener("click", function (e) {
  card_41.classList.remove('is-flipped');
});

//  Card 42

const title_42 = document.querySelector(".front-42");

const title_back_42 = document.querySelector(".product-title-dark-42");

const card_42 = document.querySelector(".card-inner-42")

title_42.addEventListener("click", function (e) {
  card_42.classList.toggle('is-flipped');
});

title_back_42.addEventListener("click", function (e) {
  card_42.classList.remove('is-flipped');
});

//  Card 43

const title_43 = document.querySelector(".front-43");

const title_back_43 = document.querySelector(".product-title-dark-43");

const card_43 = document.querySelector(".card-inner-43")

title_43.addEventListener("click", function (e) {
  card_43.classList.toggle('is-flipped');
});

title_back_43.addEventListener("click", function (e) {
  card_43.classList.remove('is-flipped');
});

//  Card 44

const title_44 = document.querySelector(".front-44");

const title_back_44 = document.querySelector(".product-title-dark-44");

const card_44 = document.querySelector(".card-inner-44")

title_44.addEventListener("click", function (e) {
  card_44.classList.toggle('is-flipped');
});

title_back_44.addEventListener("click", function (e) {
  card_44.classList.remove('is-flipped');
});

//  Card 45

const title_45 = document.querySelector(".front-45");

const title_back_45 = document.querySelector(".product-title-dark-45");

const card_45 = document.querySelector(".card-inner-45")

title_45.addEventListener("click", function (e) {
  card_45.classList.toggle('is-flipped');
});

title_back_45.addEventListener("click", function (e) {
  card_45.classList.remove('is-flipped');
});

//  Card 46

const title_46 = document.querySelector(".front-46");

const title_back_46 = document.querySelector(".product-title-dark-46");

const card_46 = document.querySelector(".card-inner-46")

title_46.addEventListener("click", function (e) {
  card_46.classList.toggle('is-flipped');
});

title_back_46.addEventListener("click", function (e) {
  card_46.classList.remove('is-flipped');
});

//  Card 47

const title_47 = document.querySelector(".front-47");

const title_back_47 = document.querySelector(".product-title-dark-47");

const card_47 = document.querySelector(".card-inner-47")

title_47.addEventListener("click", function (e) {
  card_47.classList.toggle('is-flipped');
});

title_back_47.addEventListener("click", function (e) {
  card_47.classList.remove('is-flipped');
});

//  Card 48

const title_48 = document.querySelector(".front-48");

const title_back_48 = document.querySelector(".product-title-dark-48");

const card_48 = document.querySelector(".card-inner-48")

title_48.addEventListener("click", function (e) {
  card_48.classList.toggle('is-flipped');
});

title_back_48.addEventListener("click", function (e) {
  card_48.classList.remove('is-flipped');
});

//  Card 49

const title_49 = document.querySelector(".front-49");

const title_back_49 = document.querySelector(".product-title-dark-49");

const card_49 = document.querySelector(".card-inner-49")

title_49.addEventListener("click", function (e) {
  card_49.classList.toggle('is-flipped');
});

title_back_49.addEventListener("click", function (e) {
  card_49.classList.remove('is-flipped');
});

//  Card 50

const title_50 = document.querySelector(".front-50");

const title_back_50 = document.querySelector(".product-title-dark-50");

const card_50 = document.querySelector(".card-inner-50")

title_50.addEventListener("click", function (e) {
  card_50.classList.toggle('is-flipped');
});

title_back_50.addEventListener("click", function (e) {
  card_50.classList.remove('is-flipped');
});

//  Card 57

const title_57 = document.querySelector(".front-57");

const title_back_57 = document.querySelector(".product-title-dark-57");

const card_57 = document.querySelector(".card-inner-57")

title_57.addEventListener("click", function (e) {
  card_57.classList.toggle('is-flipped');
});

title_back_57.addEventListener("click", function (e) {
  card_57.classList.remove('is-flipped');
});

//  Card 51

const title_51 = document.querySelector(".front-51");

const title_back_51 = document.querySelector(".product-title-dark-51");

const card_51 = document.querySelector(".card-inner-51")

title_51.addEventListener("click", function (e) {
  card_51.classList.toggle('is-flipped');
});

title_back_51.addEventListener("click", function (e) {
  card_51.classList.remove('is-flipped');
});

//  Card 52

const title_52 = document.querySelector(".front-52");

const title_back_52 = document.querySelector(".product-title-dark-52");

const card_52 = document.querySelector(".card-inner-52")

title_52.addEventListener("click", function (e) {
  card_52.classList.toggle('is-flipped');
});

title_back_52.addEventListener("click", function (e) {
  card_52.classList.remove('is-flipped');
});

//  Card 53

const title_53 = document.querySelector(".front-53");

const title_back_53 = document.querySelector(".product-title-dark-53");

const card_53 = document.querySelector(".card-inner-53")

title_53.addEventListener("click", function (e) {
  card_53.classList.toggle('is-flipped');
});

title_back_53.addEventListener("click", function (e) {
  card_53.classList.remove('is-flipped');
});

//  Card 54

const title_54 = document.querySelector(".front-54");

const title_back_54 = document.querySelector(".product-title-dark-54");

const card_54 = document.querySelector(".card-inner-54")

title_54.addEventListener("click", function (e) {
  card_54.classList.toggle('is-flipped');
});

title_back_54.addEventListener("click", function (e) {
  card_54.classList.remove('is-flipped');
});

//  Card 55

const title_55 = document.querySelector(".front-55");

const title_back_55 = document.querySelector(".product-title-dark-55");

const card_55 = document.querySelector(".card-inner-55")

title_55.addEventListener("click", function (e) {
  card_55.classList.toggle('is-flipped');
});

title_back_55.addEventListener("click", function (e) {
  card_55.classList.remove('is-flipped');
});

//  Card 56

const title_56 = document.querySelector(".front-56");

const title_back_56 = document.querySelector(".product-title-dark-56");

const card_56 = document.querySelector(".card-inner-56")

title_56.addEventListener("click", function (e) {
  card_56.classList.toggle('is-flipped');
});

title_back_56.addEventListener("click", function (e) {
  card_56.classList.remove('is-flipped');
});

//  Card 59

const title_59 = document.querySelector(".front-59");

const title_back_59 = document.querySelector(".product-title-dark-59");

const card_59 = document.querySelector(".card-inner-59")

title_59.addEventListener("click", function (e) {
  card_59.classList.toggle('is-flipped');
});

title_back_59.addEventListener("click", function (e) {
  card_59.classList.toggle('is-flipped');
});
