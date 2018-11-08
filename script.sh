commit_ids=$(git log --reverse $1^..$2 --pretty=format:'%h')

for c in $commit_ids
do
	echo "commit id:$c"
	parent_id=$(git log --pretty=%P -n 1 $c)
	echo "Parent is $parent_id"
	if [[ $(git diff $parent_id..$c --name-only --diff-filter=ACMRTUXB) ]]; then
    	    echo "there are files"
	    git archive -o update.zip $c $(git diff $parent_id..$c --name-only --diff-filter=ACMRTUXB)
	    for x in update.zip ; do unzip -d patch -o -u $x ; done
	else
	    echo "no files found"
	fi	
	for f in $(git diff $parent_id..$c --name-only --diff-filter=D) ; do 
		echo "patch/$f"
		rm patch/$f
	done
done