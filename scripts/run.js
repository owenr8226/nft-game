const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Meliodas", "Ban", "Diane", "King", "Gowther", "Merlin", "Escanor"],
        ["https://i.pinimg.com/originals/f6/06/b6/f606b6441dc9f0652b71fe7676ebe266.gif",
        "https://c.tenor.com/U_R_FD7dIqkAAAAC/seven-deadly-sins-ban.gif", 
        "https://c.tenor.com/wD6oAWjW_RUAAAAC/the-seven-deadly-sins-diane.gif",
        "https://giffiles.alphacoders.com/208/208588.gif",
        "https://c.tenor.com/H-Lx9GRYCk0AAAAC/gowther-seven-deadly-sins.gif",
        "https://c.tenor.com/CRLMrhKx7AwAAAAC/anime-merlin.gif",
        "https://c.tenor.com/quZVM1Xuz2IAAAAC/escanor-seven-deadly-sins.gif"],
        [6000, 10000, 7000, 4000, 5000, 3000, 8000],
        [1000, 500, 400, 600, 300, 200, 900],
        "The Demon King",
        "https://static.wikia.nocookie.net/nanatsu-no-taizai/images/c/c7/Demon_King_anime_full_appearance.png/revision/latest?cb=20191212170217",
        100000,
        1500
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
};
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
  
runMain();
