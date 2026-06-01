$files = "contact.html", "3d-matterport.html", "home-1.html", "photography.html"
$accessKey = "5a0a996c-edfc-4513-bd73-3e7ad62d3a04"
foreach ($f in $files) {
    if (Test-Path $f) {
        $content = Get-Content $f -Raw
        $content = $content -replace '(<div[^>]+id="comp-[a-zA-Z0-9]+" class="[^"]*wixui-form[^>]+)>', "`$1><form action=`"https://api.web3forms.com/submit`" method=`"POST`"><input type=`"hidden`" name=`"access_key`" value=`"$accessKey`">"
        $content = $content -replace '</footer></div></div><div aria-label="bottom of page"', "</footer></form></div></div><div aria-label=`"bottom of page`""
        $content = $content -replace '(<input[^>]+id="comp-[a-zA-Z0-9]*input"[^>]*?)>', "`$1 name=`"input`">"
        $content = $content -replace '(<textarea[^>]+id="comp-[a-zA-Z0-9]*textarea"[^>]*?)>', "`$1 name=`"textarea`">"
        $content = $content -replace '<button([^>]+)type="button"', '<button$1type="submit"'
        Set-Content $f -Value $content
    }
}
git add .
git commit -m "Re-apply Web3Forms"
git push -f

