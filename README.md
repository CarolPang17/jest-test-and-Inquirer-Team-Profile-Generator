jest-test-and-Inquirer-Team-Profile-Generator<br />

demonstration video :<br />
https://drive.google.com/file/d/1FBxqT7vHWh9Bpk5Jgwr3Pcj2WJFtpiD8/view?usp=sharing<br />

github link:<br />
https://github.com/CarolPang17/jest-test-and-Inquirer-Team-Profile-Generator<br />

sample html :<br />
https://carolpang17.github.io/jest-test-and-Inquirer-Team-Profile-Generator/sample.html<br />

installation requirement:
1. npm i <br />
2. npm init <br />
3. npm install jest --save-dev <br />
4. npm i inquirer <br />


This is a project that can generate team menber information. <br />
below is a sample html page that show how is the finished page looks: <br />
![Screen Shot 2022-03-06 at 10 42 04 PM](https://user-images.githubusercontent.com/42502061/156981166-fe603ccd-984b-47c0-ae68-fead01f5ddcd.png)


-The first team will alsways be "My Team" <br />
-You can add as many as additional teams that you want start from the second team <br />
-There is no limit or requirement of how many employee for a role in a team. you can add manys manager or zero manager in a team, and same as other role. <br />

E.g : in "Other Team 2" , i have one two Engineer , no manager, no intern, and that is okay too. <br />
![Screen Shot 2022-03-06 at 10 48 51 PM](https://user-images.githubusercontent.com/42502061/156981972-b92cc4ed-0cc5-41a0-b649-04d15c65589c.png) <br />

To start, select the index.js file, right click, pick "Open in integrated Terminal", then the terminal will pop up for the currect file location <br />
![Screen Shot 2022-03-06 at 10 10 26 PM](https://user-images.githubusercontent.com/42502061/156977807-17e94d04-84d4-471f-a187-16b2e1d723d0.png) <br />



1. first , enter "node index" in terminal . <br />
2. then a message will pop up saying " We are now building your own team | Team Number : 0 " . This mean now we are inputting data for your own team. <br />
3. the question will start prompt and ask for name, ID#, email, and the role <br />
![Screen Shot 2022-03-06 at 10 13 38 PM](https://user-images.githubusercontent.com/42502061/156978103-5f56e2d9-2bf8-463e-97a6-9235d48f7884.png) <br />



If the role is manager, it will ask for office number. <br />
![Screen Shot 2022-03-06 at 10 17 13 PM](https://user-images.githubusercontent.com/42502061/156978476-a79d389e-2128-41b8-b330-1f4131d98c55.png) <br />

If the role is engineer, it will ask for Github Name. <br />
![Screen Shot 2022-03-06 at 10 21 09 PM](https://user-images.githubusercontent.com/42502061/156978908-812a5baa-dee7-4e26-84d8-d3e00b79a4ee.png) <br />


If the role is intern, it will ask for which school. <br />
![Screen Shot 2022-03-06 at 10 20 15 PM](https://user-images.githubusercontent.com/42502061/156978788-7e24749a-b7db-4091-8058-d2c7dd69f2c3.png) <br />


Every time when you finish input the information for the employee, it will prompt a question and ask "What would you like to do next. <br />

-if you select "Add a new member" you will asked to input another employee's information <br />

-if you select "add new team", a message will pop up saying "We are now building a new additional team |  Team Number : 1 ", that's mean now you are creating data for another additional team , start from the second team, you will not entering data for your own team, but additional team. <br />
![Screen Shot 2022-03-06 at 10 26 36 PM](https://user-images.githubusercontent.com/42502061/156979369-57d24354-a57d-4905-86f1-4df5f793f377.png) <br />
now you will be asked to input employee's information for the additional team that you just created <br />

-if you select "Create Html", you will see a message of " HTML page has been created, please see "newWeb.html" file! " <br />
![Screen Shot 2022-03-06 at 10 36 39 PM](https://user-images.githubusercontent.com/42502061/156980493-45d13db5-51a4-4ac8-b1f3-6fd7ce82d101.png) <br />
Now you can see a file named "newWeb.html" has been created with the info you just input! <br />

On the browser, <br />
-If you click on the email address on the employee profile, then your default email program opens and populates the to field of the email with the address <br />
![Screen Shot 2022-03-06 at 10 41 09 PM](https://user-images.githubusercontent.com/42502061/156981094-82fabd74-506b-4cb5-b84a-f3af1d8ac6cb.png) <br />
![Screen Shot 2022-03-06 at 10 07 15 PM](https://user-images.githubusercontent.com/42502061/156977467-e378cea1-36e4-4a6b-9374-a6ca88a9fce7.png) <br />

For Engineer, it contains github name , if you click on the github name, it will jump to the github profile web page. <br />
![Screen Shot 2022-03-06 at 10 41 28 PM](https://user-images.githubusercontent.com/42502061/156981125-51e2eaf6-1340-4931-bce1-b99a41d1b802.png) <br />


If you do like to open the sample of the html will generate, please open in browser for sample.html. <br />
![Screen Shot 2022-03-06 at 10 43 19 PM](https://user-images.githubusercontent.com/42502061/156981297-7662ed09-bac9-46ab-9337-11f20eae41d0.png) <br />

Thanks and Enjoy!




