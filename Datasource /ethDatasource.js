const { RESTDataSource } = require("apollo-datasource-rest"); 
// Importing RESTDataSource from apollo to create a REST data source

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
// Hardcoded Ethereum address to query 

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
    // Setting base URL for Etherscan API
  }

  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
    // Getting Ether balance for the hardcoded address
  }

  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`  
    );
    // Getting total Ether supply

  }

  //Paste Code Here For New API Endpoints
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
    // Getting latest ETH price
  }

  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
    // Getting estimated block confirmation time
  }
}

module.exports = EtherDataSource;
