const questions = [
    {
      questionText: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
      options: [
            "1. Amazon EC2 costs are billed on a monthly basis",
            "2.Users retain full administrative access to their Amazon EC2 instances.", 
            "3. Amazon EC2 instances can be launched on demand when needed", 
            "4. Users can permanently run enough instances to handle peak workloads."
        ],
      answer:"3. Amazon EC2 instances can be launched on demand when needed" ,
      justification:" The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises serversto handle the peak load.",
    },
    
    {
      questionText: "Which AWS service would simplify the migration of a database to AWS?",
      options: [
        "1. AWS Storage Gateways",
        "2. AWS Database Migration Service (AWS DMS)",
        "3. Amazon EC2",
        "4. Amazon AppStream 2.0",
      ],
      answer: "2. AWS Database Migration Service (AWS DMS)",
      justification:" AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
    },
    {
      questionText: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
      options: ["1. AWS Config", "2. AWS OpsWorks", "3. AWS SDK", "4. AWS Marketplace"],
      answer: "4. AWS Marketplace",
      justification:" AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",
    },
    {
      questionText:
        "Which AWS networking service enables a company to create a virtual network within AWS?",
      options: [
        "1. AWS Config",
        "2. Amazon Route 53",
        "3. AWS Direct Connect",
        "4. Amazon Virtual Private Cloud (Amazon VPC)",
      ],
      answer: "4. Amazon Virtual Private Cloud (Amazon VPC)",
      justification:" Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.",
    },
    {
      questionText:
        "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
      options: ["1. Configuring third-party applications", "2. Maintaining physical hardware", "3. Securing application access and data", "4. Managing guest operating systems"],
      answer: "2. Maintaining physical hardware",
      justification:" Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.",
    },



    {
      questionText: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
      options: ["1. AWS Regions", "2. Edge locations", "3. Availability Zones","4. Virtual Private Cloud (VPC)"],
      answer: "2. Edge locations",
      justification:" To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. ",
    },
    {
      questionText: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
      options: [ "1. Use Amazon Cloud Directory","2. Audit AWS Identity and Access Management (IAM) roles","3. Enable multi-factor authentication", "4. Enable AWS CloudTrail"],
      answer: "3. Enable multi-factor authentication",
      justification:"Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will b prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.",
    },
    {
      questionText: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
      options: [ "1. AWS Trusted Advisor", "2. AWS CloudTrail", "3. AWS X-Ray", "4. AWS Identity and Access Management (AWS IAM)"],
      answer: "2. AWS CloudTrail",
      justification:"  AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
    },
    {
      questionText: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
      options: ["1. Amazon Simple Notification Service (Amazon SNS)", "2. AWS CloudTrail", "3. AWS Trusted Advisor", "4. Amazon Route 53"],
      answer: "1. Amazon Simple Notification Service (Amazon SNS)",
      justification:" Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.",
    },
    {
      questionText: "Where can a user find information about prohibited actions on the AWS infrastructure?",
      options: ["1. AWS Trusted Advisor", "2. AWS Identity and Access Management (IAM)", "3. AWS Billing Console", "4. AWS Acceptable Use Policy"],
      answer: "4. AWS Acceptable Use Policy",
      justification:" The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.",
    },
];    
 