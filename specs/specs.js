describe("pigLatin", function() {
  it("adds 'ay' to the end of a word that starts with the letter a", function()  { pigLatin("apple").should.equal("appleay");
  });

  it("adds 'ay' to the end of a word that starts with any vowel", function() {
    pigLatin("english").should.equal("englishay");
  });

  it("takes a single consonant at the beginning of a word and moves it to the end", function() {
    pigLatin("cat").should.equal("atcay")
  });


  it("takes two consonants at the beginning of a word and moves them to the end", function() {
    pigLatin("cricket").should.equal("icketcray");
  });
});

describe("vowelCheck", function() {
  it("returns true if a word has a vowel in the specified spot", function() {
    vowelCheck("peanut", 1).should.equal(true);
  });
});
