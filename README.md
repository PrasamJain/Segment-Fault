Segment Fault is a question and answer website for professional and enthusiast programmers. It features questions and answers on a wide range of topics in computer programming. The website serves as a platform for users to ask and answer questions, and, through membership and active participation, to vote questions and answers up or down.The whole idea is to make learning interactive and efficient.
### Manual Setup
1. Open your local CLI -

   ```
   mkdir Segment_fault
   cd Segment_fault
   ```

2. Setup the code -

   - Create a `.env` file and the format should be as given in `.env.example`.
   - Clone the code-

     ```
     git clone <repo-link>
     cd Segment_fault
     ```

3. Setup the backend code -

   - Create a `.env` file and the format should be as given in `.env.example`.
   - Goto server directory and install the modules-

   ```
   cd server

   npm install
   ```

   - Open your Mongoose Client -

   ```
   CREATE DATABASE Segment-Fault;
   ```

   NOTE: Don't forget to keep the database name same in the `.env` and here.

   - Run the index server `npm start`.

4. Open a new CLI terminal and goto the root `Segment_fault` folder you created in the first step.
5. Setup the Frontend code -

   - Goto client directory and install the modules-

     ```
     cd client

     npm install
     ```

   - Run the client index `npm start`.

## Made By

### Rahul Bairagi | [📝 LinkedIn](https://www.linkedin.com/in/rahul-bairagi-b88b20165/)
### Pravishti Bhardwaj | [📝 LinkedIn](https://www.linkedin.com/in/pravishti-bhardwaj-7b4042200/)
### Prathmesh Modhe | [📝 LinkedIn](https://www.linkedin.com/in/pmodhe2001/)
