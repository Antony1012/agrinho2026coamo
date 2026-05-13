import java.util.Random;
import java.util.Scanner;

public class PatoSupremo {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        Random random = new Random();

        String[] frases = {
            "O pato observa seu destino...",
            "O pato aprova sua existência.",
            "O pato ficou decepcionado 😔",
            "O pato encontrou um Doritos no chão.",
            "O pato iniciou a revolução das capivaras.",
            "O pato roubou sua senha do Wi-Fi.",
            "O pato está dançando funk.",
            "O pato sumiu misteriosamente..."
        };

        System.out.println("🦆 PATÔMETRO 3000 🦆");
        System.out.println("----------------------");

        System.out.print("Digite seu nome: ");
        String nome = teclado.nextLine();

        int nivelPato = random.nextInt(101);

        System.out.println("\nAnalisando nível de pato de " + nome + "...");
        
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("\nSeu nível de pato é: " + nivelPato + "%");

        if(nivelPato >= 80) {
            System.out.println("STATUS: Você É o pato.");
        }
        else if(nivelPato >= 50) {
            System.out.println("STATUS: Meio pato.");
        }
        else {
            System.out.println("STATUS: Humano suspeito.");
        }

        System.out.println("\nMensagem do pato:");
        System.out.println(frases[random.nextInt(frases.length)]);

        teclado.close();
    }
}