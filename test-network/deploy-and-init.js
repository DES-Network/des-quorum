a = eth.accounts[0]
web3.eth.defaultAccount = a;

// var abi = [{"constant":true,"inputs":[{"name":"enode","type":"string"}],"name":"nodeExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"string"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"string"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"enode","type":"string"}],"name":"addNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"enodes","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"enode","type":"string"}],"name":"deleteNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"reg","type":"string"},{"name":"enode","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"string"}],"name":"RegulatorRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"string"}],"name":"RegulatorRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"enode","type":"string"}],"name":"NodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"enode","type":"string"}],"name":"NodeDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
var abi = [{"constant":true,"inputs":[{"name":"enode","type":"string"}],"name":"nodeExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"string"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"string"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"enode","type":"string"}],"name":"addNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"enode","type":"string"}],"name":"deleteNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"reg","type":"string"},{"name":"enode","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"string"}],"name":"RegulatorRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"string"}],"name":"RegulatorRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"enode","type":"string"}],"name":"NodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"enode","type":"string"}],"name":"NodeDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]

// var bytecode = "0x60806040523480156200001157600080fd5b5060405162001483380380620014838339810180604052810190808051820192919060200180518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200009a82620000bc640100000000026401000000009004565b620000b4816200026b640100000000026401000000009004565b505062000521565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156200011857600080fd5b620001328162000419640100000000026401000000009004565b1515156200013f57600080fd5b60016004826040518082805190602001908083835b6020831015156200017b578051825260208201915060208101905060208303925062000154565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550600560008154809291906001019190505550806040518082805190602001908083835b6020831015156200020f5780518252602082019150602081019050602083039250620001e8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f22f1f4ff1f21662ed311579542b2058bb9dae330fc8a5b57aa05d1a1f56e078060405160405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515620002c757600080fd5b620002e1816200049d640100000000026401000000009004565b151515620002ee57600080fd5b600180826040518082805190602001908083835b60208310151562000329578051825260208201915060208101905060208303925062000302565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550600360008154809291906001019190505550806040518082805190602001908083835b602083101515620003bd578051825260208201915060208101905060208303925062000396565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f0a7183d5fa1d84a7c428d9c0a71fb9b95337bbffe2a054b99eda22f4178278bf60405160405180910390a250565b60006004826040518082805190602001908083835b6020831015156200045557805182526020820191506020810190506020830392506200042e565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900460ff169050919050565b60006001826040518082805190602001908083835b602083101515620004d95780518252602082019150602081019050602083039250620004b2565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900460ff169050919050565b610f5280620005316000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631b128f61146100a9578063261a323e1461012a578063715018a6146101ab57806380599e4b146101c25780638994dd8e1461022b5780638da5cb5b146102945780639890b329146102eb578063a0c15b7714610391578063f2c298be146103fa578063f2fde38b14610463575b600080fd5b3480156100b557600080fd5b50610110600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506104a6565b604051808215151515815260200191505060405180910390f35b34801561013657600080fd5b50610191600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610528565b604051808215151515815260200191505060405180910390f35b3480156101b757600080fd5b506101c06105aa565b005b3480156101ce57600080fd5b50610229600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506106ac565b005b34801561023757600080fd5b50610292600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610831565b005b3480156102a057600080fd5b506102a96109c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f757600080fd5b50610316600480360381019080803590602001909291905050506109ed565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035657808201518184015260208101905061033b565b50505050905090810190601f1680156103835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561039d57600080fd5b506103f8600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610aa8565b005b34801561040657600080fd5b50610461600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610c2d565b005b34801561046f57600080fd5b506104a4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dc5565b005b60006001826040518082805190602001908083835b6020831015156104e057805182526020820191506020810190506020830392506104bb565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900460ff169050919050565b60006004826040518082805190602001908083835b602083101515610562578051825260208201915060208101905060208303925061053d565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900460ff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561060557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561070757600080fd5b61071081610528565b151561071b57600080fd5b60006004826040518082805190602001908083835b6020831015156107555780518252602082019150602081019050602083039250610730565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550806040518082805190602001908083835b6020831015156107d557805182526020820191506020810190506020830392506107b0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f0f3c2abe8eaf0ca41a7df24a358452cd475b189fe258bb725c444ac1a52184e460405160405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561088c57600080fd5b610895816104a6565b1515156108a157600080fd5b600180826040518082805190602001908083835b6020831015156108da57805182526020820191506020810190506020830392506108b5565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550600360008154809291906001019190505550806040518082805190602001908083835b60208310151561096c5780518252602082019150602081019050602083039250610947565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f0a7183d5fa1d84a7c428d9c0a71fb9b95337bbffe2a054b99eda22f4178278bf60405160405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002818154811015156109fc57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610aa05780601f10610a7557610100808354040283529160200191610aa0565b820191906000526020600020905b815481529060010190602001808311610a8357829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b0357600080fd5b610b0c816104a6565b1515610b1757600080fd5b60006001826040518082805190602001908083835b602083101515610b515780518252602082019150602081019050602083039250610b2c565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550806040518082805190602001908083835b602083101515610bd15780518252602082019150602081019050602083039250610bac565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f40a06e475ce2f72df9022ace74c6a720d51ee1539203c4e682ad2c919775f1c360405160405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c8857600080fd5b610c9181610528565b151515610c9d57600080fd5b60016004826040518082805190602001908083835b602083101515610cd75780518252602082019150602081019050602083039250610cb2565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550600560008154809291906001019190505550806040518082805190602001908083835b602083101515610d695780518252602082019150602081019050602083039250610d44565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f22f1f4ff1f21662ed311579542b2058bb9dae330fc8a5b57aa05d1a1f56e078060405160405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e2057600080fd5b610e2981610e2c565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610e6857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058209c0c88c31a23eb709f6aa353a5073fd15c2ce352b2a60ff4562d92f5ae78e0990029";
var bytecode = "0x608060405234801561001057600080fd5b50604051610cf5380380610cf5833981016040528051602082015160008054600160a060020a0319163317905590820191016100548264010000000061006d810204565b61006681640100000000610194810204565b5050610358565b600054600160a060020a0316331461008457600080fd5b610096816401000000006102ba810204565b156100a057600080fd5b60016002826040518082805190602001908083835b602083106100d45780518252601f1990920191602091820191016100b5565b51815160209384036101000a60001901801990921691161790529201948552506040519384900381018420805460ff1916951515959095179094555050825183928291908401908083835b6020831061013e5780518252601f19909201916020918201910161011f565b5181516020939093036101000a60001901801990911692169190911790526040519201829003822093507f22f1f4ff1f21662ed311579542b2058bb9dae330fc8a5b57aa05d1a1f56e078092506000919050a250565b600054600160a060020a031633146101ab57600080fd5b6101bd81640100000000610325810204565b156101c757600080fd5b600180826040518082805190602001908083835b602083106101fa5780518252601f1990920191602091820191016101db565b51815160209384036101000a60001901801990921691161790529201948552506040519384900381018420805460ff1916951515959095179094555050825183928291908401908083835b602083106102645780518252601f199092019160209182019101610245565b5181516020939093036101000a60001901801990911692169190911790526040519201829003822093507f0a7183d5fa1d84a7c428d9c0a71fb9b95337bbffe2a054b99eda22f4178278bf92506000919050a250565b60006002826040518082805190602001908083835b602083106102ee5780518252601f1990920191602091820191016102cf565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205460ff16949350505050565b6000600182604051808280519060200190808383602083106102ee5780518252601f1990920191602091820191016102cf565b61098e806103676000396000f3006080604052600436106100985763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631b128f61811461009d578063261a323e1461010a578063715018a61461016357806380599e4b1461017a5780638994dd8e146101d35780638da5cb5b1461022c578063a0c15b771461025d578063f2c298be146102b6578063f2fde38b1461030f575b600080fd5b3480156100a957600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100f69436949293602493928401919081908401838280828437509497506103309650505050505050565b604080519115158252519081900360200190f35b34801561011657600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100f694369492936024939284019190819084018382808284375094975061039b9650505050505050565b34801561016f57600080fd5b506101786103ce565b005b34801561018657600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261017894369492936024939284019190819084018382808284375094975061043a9650505050505050565b3480156101df57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101789436949293602493928401919081908401838280828437509497506105599650505050505050565b34801561023857600080fd5b50610241610676565b60408051600160a060020a039092168252519081900360200190f35b34801561026957600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101789436949293602493928401919081908401838280828437509497506106859650505050505050565b3480156102c257600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101789436949293602493928401919081908401838280828437509497506107a49650505050505050565b34801561031b57600080fd5b50610178600160a060020a03600435166108c2565b60006001826040518082805190602001908083835b602083106103645780518252601f199092019160209182019101610345565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205460ff16949350505050565b6000600282604051808280519060200190808383602083106103645780518252601f199092019160209182019101610345565b600054600160a060020a031633146103e557600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600054600160a060020a0316331461045157600080fd5b61045a8161039b565b151561046557600080fd5b60006002826040518082805190602001908083835b602083106104995780518252601f19909201916020918201910161047a565b51815160209384036101000a60001901801990921691161790529201948552506040519384900381018420805460ff1916951515959095179094555050825183928291908401908083835b602083106105035780518252601f1990920191602091820191016104e4565b5181516020939093036101000a60001901801990911692169190911790526040519201829003822093507f0f3c2abe8eaf0ca41a7df24a358452cd475b189fe258bb725c444ac1a52184e492506000919050a250565b600054600160a060020a0316331461057057600080fd5b61057981610330565b1561058357600080fd5b600180826040518082805190602001908083835b602083106105b65780518252601f199092019160209182019101610597565b51815160209384036101000a60001901801990921691161790529201948552506040519384900381018420805460ff1916951515959095179094555050825183928291908401908083835b602083106106205780518252601f199092019160209182019101610601565b5181516020939093036101000a60001901801990911692169190911790526040519201829003822093507f0a7183d5fa1d84a7c428d9c0a71fb9b95337bbffe2a054b99eda22f4178278bf92506000919050a250565b600054600160a060020a031681565b600054600160a060020a0316331461069c57600080fd5b6106a581610330565b15156106b057600080fd5b60006001826040518082805190602001908083835b602083106106e45780518252601f1990920191602091820191016106c5565b51815160209384036101000a60001901801990921691161790529201948552506040519384900381018420805460ff1916951515959095179094555050825183928291908401908083835b6020831061074e5780518252601f19909201916020918201910161072f565b5181516020939093036101000a60001901801990911692169190911790526040519201829003822093507f40a06e475ce2f72df9022ace74c6a720d51ee1539203c4e682ad2c919775f1c392506000919050a250565b600054600160a060020a031633146107bb57600080fd5b6107c48161039b565b156107ce57600080fd5b60016002826040518082805190602001908083835b602083106108025780518252601f1990920191602091820191016107e3565b51815160209384036101000a60001901801990921691161790529201948552506040519384900381018420805460ff1916951515959095179094555050825183928291908401908083835b6020831061086c5780518252601f19909201916020918201910161084d565b5181516020939093036101000a60001901801990911692169190911790526040519201829003822093507f22f1f4ff1f21662ed311579542b2058bb9dae330fc8a5b57aa05d1a1f56e078092506000919050a250565b600054600160a060020a031633146108d957600080fd5b6108e2816108e5565b50565b600160a060020a03811615156108fa57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058208f22ed71c74bbc73824c9cca855f20a1741218ed6de13fa8d769c982f0c355380029";

var regContract = web3.eth.contract(abi);

// Contract address
var address = "0x1932c48b2bF8102Ba33B4A6B545C32236e342f34";

var c = regContract.new("BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=", "ac6b1096ca56b9f6d004b779ae3728bf83f8e22453404cc3cef16a3d9b96608bc67c4b30db88e0a5a6c6390213f7acbe1153ff6d23ce57380104288ae19373ef", {from:web3.eth.accounts[0], data: bytecode, gas: 0x47b760});

console.log("\n\nThe contract will be mined when two or more nodes accept this transaction.\n Before this contract is deployed, the permissioning works like Quorum, wherein any node in the permissioned nodes file is considered safe. However, once the contract has been launched, the contract overrides the permissioned nodes file and decides which nodes are permissioned.")
console.log("\n\nOnce the contract is deployed, we add the first four nodes in whitelist (see this script for how it's done).")


regContract = web3.eth.contract(abi);
var contractInstance = regContract.at(address);

contractInstance.addNode("0ba6b9f606a43a95edc6247cdb1c1e105145817be7bcafd6b2c0ba15d58145f0dc1a194f70ba73cd6f4cdd6864edc7687f311254c7555cc32e4d45aeb1b80416");
contractInstance.addNode("579f786d4e2830bbcc02815a27e8a9bacccc9605df4dc6f20bcc1a6eb391e7225fff7cb83e5b4ecd1f3a94d8b733803f2f66b7e871961e7b029e22c155c3a778");
contractInstance.addNode("3d9ca5956b38557aba991e31cf510d4df641dce9cc26bfeb7de082f0c07abb6ede3a58410c8f249dabeecee4ad3979929ac4c7c496ad20b8cfdd061b7401b4f5");