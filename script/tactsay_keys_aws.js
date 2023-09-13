


var boxes = [

    "00_go",

    "01_command_ec2",

    "02_take_rest",

    "03_command_cloud_front",

    "04_actor_1_surya",

    "05_command_s3",

    "06_command_ecs",

    "07_do_nothing",

    "08_kollywood_samantha",

    "09_command_lambda",

    "10_do_nothing",

    "11_general_aws",

    "12_kollywood_vadivelu",

    "13_command_eks",

    "14_command_route_53",

    "15_command_app_mesh",

    "16_kollywood_gv_prakash",

    "17_take_rest",

    "18_command_cloud_formation",

    "19_command_sagemaker",

    "20_kollywood_watch_movie",

    "21_command_aws_lens",

    // "22_command_df",

    "23_do_nothing",

    "24_kollywood_vijay",

    "25_command_aws_rekognition",

    "26_command_aws_textract",

    "27_command_load_balancer",

    "28_kollywood_trisha",

    "29_command_sns",

    "30_command_aws_batch",

    "31_do_nothing",

    "32_kollywood_yuvan_shankar_raja",

    "33_command_system_manager",

    "34_take_rest",

    "35_kollywood_gautam_menon",

    "36_kollywood_goundamani",

    "37_do_nothing",

    "38_kollywood_hip_hop_tamizha",

    "39_genius_corner",

    "40_command_task_definition"

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

    "01_command_ec2" : {
        "key_type" : "command",
        "name" : "Command: EC2",
        "price" : 50,
        "rent" : 5,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/01_command_ec2.jpg"
    },

    "02_take_rest" : {
        "key_type" : "rest",
        "name" : "Take Rest",
        "price" : 0,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/02_take_rest.png"
    },


    "03_command_cloud_front" : {
        "key_type" : "command",
        "name" : "Command: Cloud Front",
        "price" : 50,
        "rent" : 20,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/03_command_cloud_front.jpg"
    },

    "04_actor_1_surya" : {
        "key_type" : "kollywood",
        "name" : "K: Surya",
        "price" : 200,
        "rent" : 20,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/04_actor_1_surya.jpeg"
    },

    "05_command_s3" : {
        "key_type" : "command",
        "name" : "Command: S3",
        "price" : 200,
        "rent" : 20,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/05_command_s3.png"
    },

    "06_command_ecs" : {
        "key_type" : "command",
        "name" : "Command: ECS",
        "price" : 100,
        "rent" : 10,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/06_command_ecs.jpg"
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

    "09_command_lambda" : {
        "key_type" : "command",
        "name" : "Command: Lambda",
        "price" : 120,
        "rent" : 12,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/09_command_lambda.jpg"
    },

    "10_do_nothing" : {
        "key_type" : "command",
        "name" : "Do Nothing",
        "price" : 150,
        "rent" : 15,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/10_command_echo.jpeg"
    },

    "11_general_aws" : {
        "key_type" : "command",
        "name" : "General AWS",
        "price" : 140,
        "rent" : 14,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/11_general_aws.png"
    },

    "12_kollywood_vadivelu" : {
        "key_type" : "kollywood",
        "name" : "K: Vadivelu",
        "price" : 150,
        "rent" : 15,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/12_kollywood_vadivelu.jpeg"
    },

    "13_command_eks" : {
        "key_type" : "command",
        "name" : "Command: EKS",
        "price" : 140,
        "rent" : 14,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/13_command_eks.jpg"
    },

    "14_command_route_53" : {
        "key_type" : "command",
        "name" : "Command: Route 53",
        "price" : 160,
        "rent" : 16,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/14_command_route_53.jpg"
    },

    "15_command_app_mesh" : {
        "key_type" : "command",
        "name" : "Command: App Mesh",
        "price" : 200,
        "rent" : 20,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/15_command_app_mesh.png"
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

    "18_command_cloud_formation" : {
        "key_type" : "command",
        "name" : "Command: Cloud Formation",
        "price" : 180,
        "rent" : 18,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/18_command_cloud_formation.jpg"
    },

    "19_command_sagemaker" : {
        "key_type" : "command",
        "name" : "Command: Sage Maker",
        "price" : 200,
        "rent" : 20,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/19_command_sagemaker.jpg"
    },

    "20_kollywood_watch_movie" : {
        "key_type" : "fine",
        "name" : "K: Watch Movie",
        "price" : 20,
        "rent" : 0,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/20_kollywood_watch_movie.jpg"
    },

    "21_command_aws_lens" : {
        "key_type" : "command",
        "name" : "Command: AWS Lens",
        "price" : 220,
        "rent" : 22,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/21_command_aws_lens.jpg"
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

    "25_command_aws_rekognition" : {
        "key_type" : "command",
        "name" : "Command: AWS Rekognition",
        "price" : 200,
        "rent" : 20,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/25_command_aws_rekognition.jpg"
    },

    "26_command_aws_textract" : {
        "key_type" : "command",
        "name" : "Command: AWS Textract",
        "price" : 200,
        "rent" : 20,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/26_command_aws_textract.jpg"
    },

    "27_command_load_balancer" : {
        "key_type" : "command",
        "name" : "Command: Load Balancer",
        "price" : 260,
        "rent" : 26,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/27_command_load_balancer.jpg"
    },

    "28_kollywood_trisha" : {
        "key_type" : "kollywood",
        "name" : "K: Trisha",
        "price" : 260,
        "rent" : 26,
        "image_url" : "http://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/tactsay/28_kollywood_trisha.jpeg"
    },

    "29_command_sns" : {
        "key_type" : "command",
        "name" : "Command: SNS",
        "price" : 120,
        "rent" : 12,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/29_command_sns.jpg"
    },

    "30_command_aws_batch" : {
        "key_type" : "command",
        "name" : "Command: AWS Batch",
        "price" : 280,
        "rent" : 28,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/30_command_aws_batch.jpg"
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

    "33_command_system_manager" : {
        "key_type" : "command",
        "name" : "Command: System Manager",
        "price" : 300,
        "rent" : 30,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/33_command_system_manager.jpg"
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

    "40_command_task_definition" : {
        "key_type" : "command",
        "name" : "Command: Task Definition",
        "price" : 400,
        "rent" : 40,
        "image_url" : "https://d1cb7w4cvia6lb.cloudfront.net/featurepreneur/awstactsay/40_command_task_definition.jpg"
    },

};
