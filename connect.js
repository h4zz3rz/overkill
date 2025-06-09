
const ascii = `                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               
MMMMMMMM               MMMMMMMM     OOOOOOOOO     DDDDDDDDDDDDD      EEEEEEEEEEEEEEEEEEEEEE        SSSSSSSSSSSSSSS              AAA               KKKKKKKKK    KKKKKKKIIIIIIIIIITTTTTTTTTTTTTTTTTTTTTTT     HHHHHHHHH     HHHHHHHHH               AAA         TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIII
M:::::::M             M:::::::M   OO:::::::::OO   D::::::::::::DDD   E::::::::::::::::::::E      SS:::::::::::::::S            A:::A              K:::::::K    K:::::KI::::::::IT:::::::::::::::::::::T     H:::::::H     H:::::::H              A:::A        T:::::::::::::::::::::TI::::::::I
M::::::::M           M::::::::M OO:::::::::::::OO D:::::::::::::::DD E::::::::::::::::::::E     S:::::SSSSSS::::::S           A:::::A             K:::::::K    K:::::KI::::::::IT:::::::::::::::::::::T     H:::::::H     H:::::::H             A:::::A       T:::::::::::::::::::::TI::::::::I
M:::::::::M         M:::::::::MO:::::::OOO:::::::ODDD:::::DDDDD:::::DEE::::::EEEEEEEEE::::E     S:::::S     SSSSSSS          A:::::::A            K:::::::K   K::::::KII::::::IIT:::::TT:::::::TT:::::T     HH::::::H     H::::::HH            A:::::::A      T:::::TT:::::::TT:::::TII::::::II
M::::::::::M       M::::::::::MO::::::O   O::::::O  D:::::D    D:::::D E:::::E       EEEEEE     S:::::S                     A:::::::::A           KK::::::K  K:::::KKK  I::::I  TTTTTT  T:::::T  TTTTTT       H:::::H     H:::::H             A:::::::::A     TTTTTT  T:::::T  TTTTTT  I::::I  
M:::::::::::M     M:::::::::::MO:::::O     O:::::O  D:::::D     D:::::DE:::::E                  S:::::S                    A:::::A:::::A            K:::::K K:::::K     I::::I          T:::::T               H:::::H     H:::::H            A:::::A:::::A            T:::::T          I::::I  
M:::::::M::::M   M::::M:::::::MO:::::O     O:::::O  D:::::D     D:::::DE::::::EEEEEEEEEE         S::::SSSS                A:::::A A:::::A           K::::::K:::::K      I::::I          T:::::T               H::::::HHHHH::::::H           A:::::A A:::::A           T:::::T          I::::I  
M::::::M M::::M M::::M M::::::MO:::::O     O:::::O  D:::::D     D:::::DE:::::::::::::::E          SS::::::SSSSS          A:::::A   A:::::A          K:::::::::::K       I::::I          T:::::T               H:::::::::::::::::H          A:::::A   A:::::A          T:::::T          I::::I  
M::::::M  M::::M::::M  M::::::MO:::::O     O:::::O  D:::::D     D:::::DE:::::::::::::::E            SSS::::::::SS       A:::::A     A:::::A         K:::::::::::K       I::::I          T:::::T               H:::::::::::::::::H         A:::::A     A:::::A         T:::::T          I::::I  
M::::::M   M:::::::M   M::::::MO:::::O     O:::::O  D:::::D     D:::::DE::::::EEEEEEEEEE               SSSSSS::::S     A:::::AAAAAAAAA:::::A        K::::::K:::::K      I::::I          T:::::T               H::::::HHHHH::::::H        A:::::AAAAAAAAA:::::A        T:::::T          I::::I  
M::::::M    M:::::M    M::::::MO:::::O     O:::::O  D:::::D     D:::::DE:::::E                              S:::::S   A:::::::::::::::::::::A       K:::::K K:::::K     I::::I          T:::::T               H:::::H     H:::::H       A:::::::::::::::::::::A       T:::::T          I::::I  
M::::::M     MMMMM     M::::::MO::::::O   O::::::O  D:::::D    D:::::D E:::::E       EEEEEE                 S:::::S  A:::::AAAAAAAAAAAAA:::::A    KK::::::K  K:::::KKK  I::::I          T:::::T               H:::::H     H:::::H      A:::::AAAAAAAAAAAAA:::::A      T:::::T          I::::I  
M::::::M               M::::::MO:::::::OOO:::::::ODDD:::::DDDDD:::::DEE::::::EEEEEEEE:::::E     SSSSSSS     S:::::S A:::::A             A:::::A   K:::::::K   K::::::KII::::::II      TT:::::::TT           HH::::::H     H::::::HH   A:::::A             A:::::A   TT:::::::TT      II::::::II
M::::::M               M::::::M OO:::::::::::::OO D:::::::::::::::DD E::::::::::::::::::::E     S::::::SSSSSS:::::SA:::::A               A:::::A  K:::::::K    K:::::KI::::::::I      T:::::::::T           H:::::::H     H:::::::H  A:::::A               A:::::A  T:::::::::T      I::::::::I
M::::::M               M::::::M   OO:::::::::OO   D::::::::::::DDD   E::::::::::::::::::::E     S:::::::::::::::SSA:::::A                 A:::::A K:::::::K    K:::::KI::::::::I      T:::::::::T           H:::::::H     H:::::::H A:::::A                 A:::::A T:::::::::T      I::::::::I
MMMMMMMM               MMMMMMMM     OOOOOOOOO     DDDDDDDDDDDDD      EEEEEEEEEEEEEEEEEEEEEE      SSSSSSSSSSSSSSS AAAAAAA                   AAAAAAAKKKKKKKKK    KKKKKKKIIIIIIIIII      TTTTTTTTTTT           HHHHHHHHH     HHHHHHHHHAAAAAAA                   AAAAAAATTTTTTTTTTT      IIIIIIIIII
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                               `

const chalk = require("chalk")

const Connecting = async ({
  update,
  conn,
  Boom,
  DisconnectReason,
  sleep,
  clientstart,
}) => {   
     const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            console.log(lastDisconnect.error, 'deeppink');
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit();
            } else if (reason === DisconnectReason.badSession) {
                console.log(chalk.red.bold(`bad session file, please delete session and scan again`));
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(chalk.red.bold('connection closed, reconnecting...'));
                process.exit();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(chalk.red.bold('connection lost, trying to reconnect'));
                process.exit();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(chalk.red.bold('connection replaced, another new session opened, please close current session first'));
                conn.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red.bold(`device logged out, please scan again and run.`));
                conn.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(chalk.yellow.bold('restart required,restarting...'));
                await clientstart();
            } else if (reason === DisconnectReason.timedOut) {
                console.log(chalk.yellow.bold('connection timedOut, reconnecting...'));
                clientstart();
            }
        } else if (connection === "connecting") {
            console.log(chalk.blue.bold('Connecting. . .'));
        } else if (connection === "open") {
            console.log(`${ascii}`)
            console.log(chalk.blue.bold('Bot Sukses Terhubung ✔︎'));
        }}
 
 module.exports = { Connecting };
