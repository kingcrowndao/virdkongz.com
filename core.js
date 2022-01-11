var wallet_address;
var wallet_installed = window.klaytn !== undefined && window.caver !== undefined;
if (wallet_installed != true) {
    if (confirm("Kaikas 설치가 필요합니다. Kaikas를 설치하시겠습니까?")) {
        open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko");
    }
} else {
    (async () => {
        wallet_address = (await caver.klay.getAccounts())[0];
        if (wallet_address === undefined) {
            await klaytn.enable();
            wallet_address = (await caver.klay.getAccounts())[0];
        }
        if (window.init !== undefined) {
          window.init();
        }
    })();
}

var premint_contract = new caver.klay.Contract([
  {
    "constant": false,
    "inputs": [
      {
        "name": "code",
        "type": "string"
      }
    ],
    "name": "makeCode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "userExists",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_limit",
        "type": "uint256"
      }
    ],
    "name": "setLimit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "name": "codeCounts",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "mintPrice",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "usersCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "count",
        "type": "uint256"
      },
      {
        "name": "code",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "maxCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_maxCount",
        "type": "uint256"
      }
    ],
    "name": "setMaxCount",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "limit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "codesCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "codes",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "name": "codeUsers",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "setMintPrice",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  }
], "0x9362d5C13dBC079443b4F91853EA886C648D8670");

async function get_premint_balance() {
  $("#total_minting_count").text(await premint_contract.methods.totalSupply().call());
  $("#minting_count").text(await premint_contract.methods.balances(wallet_address).call());
}

async function premint() {
  if (await premint_contract.methods.limit().call() === "0") {
    alert("사전 민팅 진행중이 아닙니다.");
  } else {
    var count = parseInt($("#countInput").val());
    count = isNaN(count) === true ? 1 : count;
    await premint_contract.methods.mint(count, $("#codeInput").val()).send({ from: wallet_address, gas: 1500000, value: (65 * count) + "000000000000000000" });
    setTimeout(() => {
      alert("사전 민팅이 완료되었습니다.");
      location.reload();
    }, 2000);
  }
}

async function make_code() {
  var code = prompt("원하는 코드를 입력하세요.");
  var user = await premint_contract.methods.codeUsers(code).call();
  if (user !== "0x0000000000000000000000000000000000000000") {
    alert("해당 코드는 이미 사용중입니다. 다른 코드를 입력하세요.");
  } else {
    await premint_contract.methods.makeCode(code).send({ from: wallet_address, gas: 1500000 });
    setTimeout(() => {
      alert("코드 [" + code + "]가 생성됩니다. 다른 사람들이 당신의 추천인 코드로 사전 민팅을 수행하면 최대 50명까지 특수 NFT를 증정합니다.");
      location.reload();
    }, 2000);
  }
}

async function get_ranking() {
  var codesCount = parseInt(await premint_contract.methods.codesCount().call());
  var promises = [];
  var data = [];
  for (var i = 0; i < codesCount; i += 1) {
    promises.push(new Promise(async (resolve) => {
      var code = await premint_contract.methods.codes(i).call();
      var user = await premint_contract.methods.codeUsers(code).call();
      var count = await premint_contract.methods.codeCounts(code).call();
      data.push({code, user, count: parseInt(count)});
      resolve();
    }));
  }
  await Promise.all(promises);
  data.sort((a, b) => b.count - a.count);
  for (var i = 0; i < data.length; i += 1) {
    var d = data[i];
    $("#list").append("<tr><td>" + (i + 1) + "</td><td>" + d.code + "</td><td>" + d.user + "</td><td>" + d.count + "</td></tr>");
  }
  $("#loading").remove();
}

async function get_premintings() {
  var codesCount = parseInt(await premint_contract.methods.codesCount().call());
  var promises = [];
  var data = [];
  for (var i = 0; i < codesCount; i += 1) {
    promises.push(new Promise(async (resolve) => {
      var code = await premint_contract.methods.codes(i).call();
      var user = await premint_contract.methods.codeUsers(code).call();
      var count = await premint_contract.methods.codeCounts(code).call();
      data.push({code, user, count: parseInt(count)});
      resolve();
    }));
  }
  await Promise.all(promises);
  data.sort((a, b) => b.count - a.count);
  var a = [];
  var id = [];
  var start = 2570;
  for (var i = 0; i < 55; i += 1) {
    var d = data[i];
    //for (var j = 0; j < d.count; j += 1) {
      a.push(d.user);
      id.push(start);
      start += 1;
      console.log(d.count)
    //}
  }
  console.log(JSON.stringify(a));
  console.log(JSON.stringify(id));
}