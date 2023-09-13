


var boxes = [

    "00_go",

    "01_command_ping",

    "02_take_rest",

    "03_command_du",

    "04_actor_1_surya",

    "05_command_mkdir",

    "06_command_cat",

    "07_do_nothing",

    "08_kollywood_samantha",

    "09_command_ls",

    "10_do_nothing",

    "11_general_command",

    "12_kollywood_vadivelu",

    "13_command_curl",

    "14_command_kill",

    "15_command_grep",

    "16_kollywood_gv_prakash",

    "17_take_rest",

    "18_command_cp",

    "19_command_uname",

    "20_kollywood_watch_movie",

    "21_command_wget",

    // "22_command_df",

    "23_do_nothing",

    "24_kollywood_vijay",

    "25_command_cd",

    "26_command_pwd",

    "27_command_mv",

    "28_kollywood_trisha",

    "29_command_top",

    "30_command_ps",

    "31_do_nothing",

    "32_kollywood_yuvan_shankar_raja",

    "33_command_rm",

    "34_take_rest",

    "35_kollywood_gautam_menon",

    "36_kollywood_goundamani",

    "37_do_nothing",

    "38_kollywood_hip_hop_tamizha",

    "39_genius_corner",

    "40_command_chmod"

];

var info_board_default_iamge = 'https://images.unsplash.com/photo-1545703549-7bdb1d01b734?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';

// key, key_type, name, price
var box_objects = {

    "00_go" : {
        "key_type" : "go",
        "name" : "go",
        "price" : 0,
        "rent" : 0,
        "image_url" : info_board_default_iamge
    },

    "01_command_ping" : {
        "key_type" : "command",
        "name" : "Command: ping",
        "price" : 50,
        "rent" : 5,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/01_command_ping.png"
    },

    "02_take_rest" : {
        "key_type" : "rest",
        "name" : "Take Rest",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/02_take_rest.png"
    },


    "03_command_du" : {
        "key_type" : "command",
        "name" : "Command: du",
        "price" : 50,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/03_command_du.jpeg"
    },

    "04_actor_1_surya" : {
        "key_type" : "kollywood",
        "name" : "K: Surya",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/04_actor_1_surya.jpeg"
    },

    "05_command_mkdir" : {
        "key_type" : "command",
        "name" : "Command: mkdir",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/05_command_mkdir.jpeg"
    },

    "06_command_cat" : {
        "key_type" : "command",
        "name" : "Command: cat",
        "price" : 100,
        "rent" : 10,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/06_command_cat.jpeg"
    },

    "07_do_nothing" : {
        "key_type" : "nothing",
        "name" : "Do Nothing",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/07_do_nothing.jpg"

    },

    "08_kollywood_samantha" : {
        "key_type" : "kollywood",
        "name" : "K: Samantha",
        "price" : 100,
        "rent" : 10,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/08_kollywood_samantha.jpg"
    },

    "09_command_ls" : {
        "key_type" : "command",
        "name" : "Command: ls",
        "price" : 120,
        "rent" : 12,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/09_command_ls.jpeg"
    },

    "10_do_nothing" : {
        "key_type" : "command",
        "name" : "Command: echo",
        "price" : 150,
        "rent" : 15,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/10_command_echo.jpeg"
    },

    "11_general_command" : {
        "key_type" : "command",
        "name" : "General Command",
        "price" : 140,
        "rent" : 14,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/11_general_command.jpg"
    },

    "12_kollywood_vadivelu" : {
        "key_type" : "kollywood",
        "name" : "K: Vadivelu",
        "price" : 150,
        "rent" : 15,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/12_kollywood_vadivelu.jpeg"
    },

    "13_command_curl" : {
        "key_type" : "command",
        "name" : "Command: curl",
        "price" : 140,
        "rent" : 14,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/13_command_curl.jpg"
    },

    "14_command_kill" : {
        "key_type" : "command",
        "name" : "Command: kill",
        "price" : 160,
        "rent" : 16,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/14_command_kill.jpg"
    },

    "15_command_grep" : {
        "key_type" : "command",
        "name" : "Command: grep",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/15_command_grep_.png"
    },

    "16_kollywood_gv_prakash" : {
        "key_type" : "kollywood",
        "name" : "K: GV prakash",
        "price" : 180,
        "rent" : 18,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/16_kollywood_gv_prakash_.jpg"
    },

    "17_take_rest" : {
        "key_type" : "rest",
        "name" : "Take Rest",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/17_take_rest.png"
    },

    "18_command_cp" : {
        "key_type" : "command",
        "name" : "Command: cp",
        "price" : 180,
        "rent" : 18,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/18_command_cp.jpeg"
    },

    "19_command_uname" : {
        "key_type" : "command",
        "name" : "Command: uname",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/19_command_uname.jpeg"
    },

    "20_kollywood_watch_movie" : {
        "key_type" : "fine",
        "name" : "K: Watch Movie",
        "price" : 20,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/20_kollywood_watch_movie.jpg"
    },

    "21_command_wget" : {
        "key_type" : "command",
        "name" : "Command: wget",
        "price" : 220,
        "rent" : 22,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/21_command_wget.png"
    },

    // "22_command_df",

    "23_do_nothing" : {
        "key_type" : "nothing",
        "name" : "Do Nothing",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/23_do_nothing.jpeg"
    },

    "24_kollywood_vijay" : {
        "key_type" : "kollywood",
        "name" : "K: Vijay",
        "price" : 220,
        "rent" : 22,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/24_kollywood_vijay.jpeg"
    },

    "25_command_cd" : {
        "key_type" : "command",
        "name" : "Command: cd",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/25_command_cd.png"
    },

    "26_command_pwd" : {
        "key_type" : "command",
        "name" : "Command: pwd",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/26_command_pwd.png"
    },

    "27_command_mv" : {
        "key_type" : "command",
        "name" : "Command: mv",
        "price" : 260,
        "rent" : 26,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/27_command_mv.png"
    },

    "28_kollywood_trisha" : {
        "key_type" : "kollywood",
        "name" : "K: Trisha",
        "price" : 260,
        "rent" : 26,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/28_kollywood_trisha.jpeg"
    },

    "29_command_top" : {
        "key_type" : "command",
        "name" : "Command: top",
        "price" : 120,
        "rent" : 12,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/29_command_top.png"
    },

    "30_command_ps" : {
        "key_type" : "command",
        "name" : "Command: ps",
        "price" : 280,
        "rent" : 28,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/30_command_ps.png"
    },

    "31_do_nothing" : {
        "key_type" : "nothing",
        "name" : "Do Nohting",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/31_do_nothing.jpeg"
    },

    "32_kollywood_yuvan_shankar_raja" : {
        "key_type" : "kollywood",
        "name" : "K: Yuvan Shankar Raja",
        "price" : 300,
        "rent" : 30,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/32_kollywood_yuvan_shankar_raja_1.jpg"
    },

    "33_command_rm" : {
        "key_type" : "command",
        "name" : "Command: rm",
        "price" : 300,
        "rent" : 30,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/33_command_du.jpeg"
    },

    "34_take_rest" : {
        "key_type" : "rest",
        "name" : "Take Rest",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/34_take_rest.jpg"
    },

    "35_kollywood_gautam_menon" : {
        "key_type" : "kollywood",
        "name" : "K: Gautam Menon",
        "price" : 320,
        "rent" : 32,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/35_kollywood_gautam_menon.jpg"
    },

    "36_kollywood_goundamani" : {
        "key_type" : "kollywood",
        "name" : "K: Goundamani",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/36_kollywood_goundamani.jpg"
    },

    "37_do_nothing" : {
        "key_type" : "nothing",
        "name" : "Do Nothing",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/37_do_nothing.jpeg"
    },

    "38_kollywood_hip_hop_tamizha" : {
        "key_type" : "kollywood",
        "name" : "K: Hip hop tamizha",
        "price" : 350,
        "rent" : 35,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/38_kollywood_hip_hop_tamizha.jpg"
    },

    "39_genius_corner" : {
        "key_type" : "fine",
        "name" : "Genius Corner",
        "price" : 75,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/39_genius_corner.jpeg"
    },

    "40_command_chmod" : {
        "key_type" : "command",
        "name" : "Command: chmod",
        "price" : 400,
        "rent" : 40,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/40_command_chmod.jpg"
    },

};

