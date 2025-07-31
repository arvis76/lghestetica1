using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace lghestetica1.Controllers;

public class SwedishController : Controller
{
	public IActionResult Index()
	{
		return View();
	}
	public IActionResult Priser()
	{
		return View();
	}
	
	public IActionResult Kontakta()
	{
		return View();
	}
	
}

