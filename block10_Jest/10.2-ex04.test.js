const todasLetrasMaiusculas = (str) => str.toUpperCase();
const primeiraletraMaiuscula = (str) =>  str.charAt(0);
const concatenarPalavras = (str1, str2) => str1.concat(str2);

describe("testando implementações", () => {
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
      const todasLetrasMaiusculas = jest.fn().mockImplementation(a => a.toLowerCase());
  
      expect(todasLetrasMaiusculas("UPPERCASE")).toBe("uppercase");
      expect(todasLetrasMaiusculas).toHaveBeenCalled();
      expect(todasLetrasMaiusculas).toHaveBeenCalledTimes(1);
      expect(todasLetrasMaiusculas).toHaveBeenCalledWith("UPPERCASE");
    });
  
    test("mockando função que recebe um parâmetro e retorna a última letra", () => {
      const primeiraletraMaiuscula = jest.fn().mockImplementation(a => a.charAt(a.length - 1));
  
      expect(primeiraletraMaiuscula("letter")).toBe("r");
      expect(primeiraletraMaiuscula).toHaveBeenCalled();
      expect(primeiraletraMaiuscula).toHaveBeenCalledTimes(1);
      expect(primeiraletraMaiuscula).toHaveBeenCalledWith("letter");
    });
  
    test("mockando função que recebe 3 parâmetros e os concatena", () => {
      const concatenarPalavras = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));
  
      expect(concatenarPalavras("tr", "y", "be")).toBe("trybe");
      expect(concatenarPalavras).toHaveBeenCalled();
      expect(concatenarPalavras).toHaveBeenCalledTimes(1);
      expect(concatenarPalavras).toHaveBeenCalledWith("tr", "y", "be");
    });
  });